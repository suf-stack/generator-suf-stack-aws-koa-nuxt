'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.green('suf-stack-aws-koa-nuxt')} generator!`)
    );

    const qualifier_answers = await this.prompt([
      {
        type: 'confirm',
        name: 'has_s3_bucket',
        message: 'To deploy static assets, we use S3.  Have you created an S3 bucket that can be publicly accessed?'
      }
    ])

    if (!qualifier_answers.has_s3_bucket) {
      this.log(
        yosay(chalk.red('Please setup an S3 bucket before continuing'))
      )
      this.env.error('Please setup an S3 bucket before continuing')
    }

    const answers = await this.prompt([
      {
        type: 'input',
        name: 'appname',
        message: 'What is the name of your app?',
        default: this.appname
      },
      {
        type: 'input',
        name: 'appdescription',
        message: 'What is the description of your app?'
      },
      {
        type: 'input',
        name: 'public_s3_bucket',
        message: 'What is the name of your S3 bucket for static assets?'
      },
      {
        type: 'input',
        name: 'aws_region',
        message: 'What AWS region would you like to deploy to?',
        default: 'us-east-1'
      }
    ])

    this.answers = answers
  }

  writing() {
    // see https://github.com/sboudrias/mem-fs-editor

    this.fs.copy(
      this.templatePath('**'),
      this.destinationRoot(),
      {
        globOptions: {
          dot: true
        }
      }
    )
    this.fs.copy(
      this.templatePath('.env.orig'),
      this.destinationPath('.env')
    )

    this.fs.writeJSON(
      this.destinationPath('app.config.json'),
      {
        aws_region: this.answers.aws_region,
        public_s3_bucket: this.answers.public_s3_bucket
      }
    )

    this.fs.extendJSON(
      this.destinationPath('package.json'),
      {
        name: this.answers.appname,
        description: this.answers.appdescription
      }
    )

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        appname: this.answers.appname,
        appdescription: this.answers.appdescription
      }
    )
  }

  install() {
    // TODO disabling automatic yarn install due to path issues
    // this.yarnInstall()
    this.log(`IMPORTANT: run ${chalk.yellow('yarn install')}`)
    this.log(`Successfully installed your new SUF-stack app!  Be sure to also read the ${chalk.green('README.md')}`)
  }
};
