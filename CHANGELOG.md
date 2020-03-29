# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.2.0] - 2020-03-28

### Added

- Named AWS CloudWatch health checks for easier troubleshooting
- Explicit babel configuration and depenencies to use @babel/preset-env

### Changed
  
- Updated npm dependencies of templates.
- Simplified yeoman generator script
- Update yeoman installation documentation
 
### Fixed

- AWS CloudFront header whitelisting
- Standardize on ES6 modules for backend code
- Use exactly one transpilation via rollup of backend code regardless of execution environment.
  Fixes and issue with double-fix of the default export
- Fix vue linting errors in the example vue code

## [1.1.0] - 2020-01-03
 
### Changed
  
- Documentation update about setting up HTTPS with custom domains
- Adding .env configuration for local development
- Updated link for AWS credential configuration
 
### Fixed
 
- Removed extraneous debugging output

## [1.0.2] - 2020-01-02
 
### Changed
  
- Documentation updates
- Adding serverless logs aliases to package.json

## [1.0.1] - 2020-01-02

### Added

- Adding serverless-prune-plugin to avoid maximum number of deployments

### Changed
  
- Documentation updates
- Simplifying serverless.yml configuration

## [1.0.0] - 2020-01-02

Initial Release
