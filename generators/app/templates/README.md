# <%= appname %>

> <%= appdescription %>

## Serverless Universal Full-Stack (SUF)-stack app

Using:

- [Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/intro/)
  * Infrastructure as code
  * Functions as a Service (pay only for what you use, scale up automatically)
  * [Amazon AWS](https://aws.amazon.com/)
- [Koa.js](https://koajs.com/)
  * backend web framework in Node.js (Javascript)
- [Nuxt.js](https://nuxtjs.org/)
  * Universal [Vue.js](https://vuejs.org/) Framework
  * Webpack orchestration

## Setup

This app deploys to AWS.  Before using it, make sure to have an AWS account,
and AWS user (IAM) credentials.  You can use serverless to configure your credentials:

https://serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/


## Develop

Build the Nuxt.js app and run both frontend and backend locally:

```bash
yarn run dev
```

This sets you up with local development of your app.  Changes made to your backend code
trigger automatic loading of the new code via nodemon.  Changes made to your front (Nuxt) code
trigger hot-reloading in your browser.

View webpack bundle sizes:

```bash
yarn run analyze
```

## Deploy to Staging

Build, bundle, upload to S3, and deploy via serverless:

```bash
yarn run deploy-staging
```

View the most recent log messages from the server in staging:

```bash
yarn run logs-staging
```

## Deploy to Production

Build, bundle, upload to S3, and deploy via serverless:

```bash
yarn run deploy-prod
```

View the most recent log messages from the server in production:

```bash
yarn run logs-prod
```

## Add custom domain names to staging and production

To use your own domain name for your app, see:

https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html

- add domain name as an AWS Route 53 public hosted zone (e.g. app.com)
- request/approve ACM certificate for `*.app.com`
- navigate to AWS CloudFront and find the distribution(s) created above:
  * edit distribution
  * add domain name as an Alias. example: `www.app.com`
  * configure ACM certificate
- edit app.config.json
  * set appropriate APP_BASE_URL. example: `https://www.app.com`
- re-deploy your app
