npm run build --prod
aws s3 sync ./dist/continuously-mac s3://continuously-mac.com --delete --profile dev