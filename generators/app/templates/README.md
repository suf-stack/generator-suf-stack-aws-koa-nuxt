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
and AWS user (IAM) credentials.  For help, see the aws-cli documentation:

https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html


## Develop

```bash
yarn run dev
```

This sets you up with local development of your app.  Changes made to your backend code
trigger automatic loading of the new code via nodemon.  Changes made to your front (Nuxt) code
trigger hot-reloading in your browser.

## Deploy to Staging

```bash
yarn run deploy-staging
```

## Deploy to Production

```bash
yarn run deploy-prod
```

To use your own domain name for your app, see:

https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html

