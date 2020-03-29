import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import copy_assets from 'rollup-plugin-copy-assets'

export default [
  {
    input: './src-koa/create_app.js',
    output: {
      name: 'app',
      file: './dist/create_app.bundle.js',
      format: 'cjs',
      compact: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      }),
      commonjs(),
      json(),
      copy_assets({
        assets: [
          'src-koa/assets'
        ]
      })
    ],
    external (id) {
      return /^[a-z@]/.test(id)
    }
  }
]
