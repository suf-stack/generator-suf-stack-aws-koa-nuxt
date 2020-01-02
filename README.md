# suf-stack-aws-koa-nuxt

SUF-stack yeoman generator for AWS/Koa.js/Nuxt.js

SUF = Serverless Universal Full-Stack

A SUF-stack app enables the serverless deployment of
 both an optimized frontend and an
 extendable/secure backend.  All code is in the same language (modern transpiled Javascript) and deployed at the same time.

## Using:

- [Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/intro/)
  * Infrastructure as code
  * Functions as a Service (pay only for what you use, scale up automatically)
  * [Amazon AWS](https://aws.amazon.com/)
- [Koa.js](https://koajs.com/)
  * backend web framework in Node.js (Javascript)
- [Nuxt.js](https://nuxtjs.org/)
  * Universal [Vue.js](https://vuejs.org/) Framework
  * Webpack orchestration

## Features

- Infrastructure
  * Serverless: no OS patching, or babysitting instances
  * Automatic capacity scaling
  * CDN for improved site speed via AWS CloudFront
    * with compiled static assets loaded from S3
  * Detailed logging in AWS CloudFront
- Universal Frontend (Nuxt.js)
  * Native support for .vue files
  * Hot reloading in development
  * Server-side rendering for improved site speed and SEO
  * Automatic code splitting
  * Path-based routing
  * Pre-processors for SCSS, LESS, Stylus, etc
  * Eslint based automated linting
  * [plugin/module ecosystem](https://github.com/nuxt-community/awesome-nuxt)
- Node.js backend (Koa.js)
  * Modern and Lightweight
  * Native support for async/await
  * Flexible logging via bunyan
  * Nested routers used to map folder paths to URL paths

## Requirements

- Node.js 10+
- yarn
- AWS account
