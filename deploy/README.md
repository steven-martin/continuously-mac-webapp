# AWS S3 Deployment Scripts

## Available Scripts

* `prod.deploy.sh` : Deploy the contents of the`dist/` folder to an S3 bucket.

## Notes

The deployment script is currently set up to deploy to the offical continuously-mac.com website, and you may not have permission to deploy to this.

`aws s3 sync` is used to deploy to an S3 bucket, and requires a `dev profile`.
You will need to create your own AWSCLI `dev profile` for this script to work.