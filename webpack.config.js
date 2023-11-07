const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('./src/popup/popup.jsx')
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }              
          }
        },
        {
            use: ['style-loader', 'css-loader'],
            test: /\.css$/i
        }
      ]
    },
    plugins: [
        new HtmlPlugin ({
            title: 'ReactJS Boilerplate',
            filename: 'popup.html',
            chunks: ['popup']
        }),
        new CopyPlugin ({
            patterns: [
                {from: path.resolve('src/manifest.json'), 
                to: path.resolve('dist')},
            ],
        }),
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    output: {
      filename: "[name].js"
    }
  };
  