const { src } = require('gulp')
const rename = require('gulp-rename')
const awspublish = require('gulp-awspublish')
const packageconfig = require('./package.json')
const appconfig = require('./app.config.json')

const package_name = packageconfig.name

// create a new publisher using S3 options
// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
const publisher = awspublish.create(
  {
    region: appconfig.aws_region,
    params: {
      Bucket: appconfig.public_s3_bucket
    }
  }
)

const headers = {
  "Cache-Control": "max-age=315360000, no-transform, public"
}

function make_rename_func (stage) {
  return (path) => {
    let subdir = path.dirname || ''
    if (subdir === '.') {
      subdir = ''
    } else {
      subdir = '/' + subdir
    }
    path.dirname = `${package_name}/${stage}/_nuxt` + subdir
  }
}

function publish_static (stage) {
  return src('.nuxt/dist/client/**/*')
    .pipe(rename(make_rename_func(stage)))
    .pipe(publisher.publish(headers))
    .pipe(awspublish.reporter())
}

exports.publish_static_prod = function publish_static_prod () {
  return publish_static('prod')
}

exports.publish_static_staging = function publish_static_staging () {
  return publish_static('staging')
}
