import { Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as route53Targets from "aws-cdk-lib/aws-route53-targets";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as iam from "aws-cdk-lib/aws-iam";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Frontend Setup
    // Route53 Records for Site Hosting
    let hostedZone: route53.IHostedZone;
      const domainName = "grantstarkman.com";
      hostedZone = route53.HostedZone.fromLookup(
        this,
        "GrantStarkmanHostedZone",
        {
          domainName: domainName,
        },
      );

    // S3 Bucket for Website Hosting
    const grantStarkmanWebsiteBucket = new s3.Bucket(
      this,
      'GrantStarkmanWebsiteBucket',
      {
        bucketName: 'grantstarkman',
        websiteIndexDocument: "index.html",
        removalPolicy: RemovalPolicy.RETAIN,
        versioned: true,
        blockPublicAccess: {
          blockPublicAcls: false,
          blockPublicPolicy: false,
          ignorePublicAcls: false,
          restrictPublicBuckets: false,
        },
        publicReadAccess: true,
      },
    );

    new s3deploy.BucketDeployment(this, `DeployVozAmigo`, {
      sources: [
        s3deploy.Source.asset("../frontend"),
      ],
      destinationBucket: grantStarkmanWebsiteBucket,
    });

    // Cloudfront OAI for S3 Bucket
    const grantStarkmanCloudfrontOAI = new cloudfront.OriginAccessIdentity(
      this,
      "GrantStarkmanCloudfrontOAI",
      {
        comment: `OAI for ${grantStarkmanWebsiteBucket.bucketName} bucket.`,
      },
    );
    grantStarkmanWebsiteBucket.grantRead(grantStarkmanCloudfrontOAI);

    // Add permissions for CloudFront OAI to access the S3 bucket
    grantStarkmanWebsiteBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [grantStarkmanWebsiteBucket.arnForObjects("*")],
        principals: [
          new iam.CanonicalUserPrincipal(
            grantStarkmanCloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId,
          ),
        ],
      }),
    );

    const grantStarkmanCloudfrontSiteCertificate = new acm.Certificate(
      this,
      "GrantStarkmanCloudfrontSiteCertificate",
      {
        domainName: "grantstarkman.com",
        certificateName: "grantstarkman.com",
        validation: acm.CertificateValidation.fromDns(hostedZone),
      },
    );

    // Cloudfront Distribution for Frontend
    const grantStarkmanDistribution = new cloudfront.Distribution(
      this,
      "GrantStarkmanDistribution",
      {
        comment: `CloudFront distribution for ${grantStarkmanWebsiteBucket.bucketName} bucket.`,
        defaultBehavior: {
          origin: new origins.S3Origin(grantStarkmanWebsiteBucket, {
            originAccessIdentity: grantStarkmanCloudfrontOAI
          }),

          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
          },
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
          },
        ],
        defaultRootObject: "index.html",
        domainNames: ["grantstarkman.com"],
        certificate: grantStarkmanCloudfrontSiteCertificate,
      },
    );

    // Route 53 Records for Cloudfront Distribution Frontend
    new route53.ARecord(this, `VozAmigoCloudFrontARecord`, {
      zone: hostedZone,
      recordName: "grantstarkman.com",
      target: route53.RecordTarget.fromAlias(
        new route53Targets.CloudFrontTarget(grantStarkmanDistribution),
      ),
    });
  }
}
