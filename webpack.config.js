module.exports = {
  // production, development
    mode: 'development',
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  require("@babel/plugin-transform-async-to-generator"),
                  require('@babel/plugin-transform-runtime'),
                  require("@babel/plugin-transform-arrow-functions"),
                  require("@babel/plugin-transform-modules-commonjs")
              ]
              }
            }
          }
        ]
      }
  };