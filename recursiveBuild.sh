#!/bin/bash

set -e # Exit immediately if a command exits with a non-zero status.

echo "Starting build and deployment script..."

# Verify that AWS CLI is installed
if ! command -v aws &> /dev/null
then
    echo "AWS CLI could not be found. Please install it to proceed."
    exit 1
fi

# Verify that CDK CLI is installed
if ! command -v cdk &> /dev/null
then
    echo "AWS CDK CLI could not be found. Please install it to proceed."
    exit 1
fi

echo "Building the website application..."
cd website
npm ci
npm run build
echo "website application built successfully."
cd ..

echo "Synthesizing the CDK application..."
cd cdk
npm ci
cdk synth
echo "CDK application synthesized successfully."

echo "Deploying the CDK stack..."
cdk deploy --require-approval never
echo "CDK stack deployed successfully."

echo "Invalidating the CloudFront cache..."
#aws cloudfront create-invalidation --distribution-id ESZCT217A1VZO --paths "/*"

echo "Build and deployment script completed."
