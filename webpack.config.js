const path = require('path')
const pth = require('path')
const { WebpackOptionsApply } = require('webpack')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.(js|jsx|pdf|gif|png|jpe?g|svg)$/, ///\.js$|jsx/
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve : {extensions : ['*', ".js", '.jsx', 'pdf']},
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
    //     contentBase: path.join(__dirname, 'public/'),
    //     port: 3000,
    //     publicPath: 'http://localhost:3000/dist/',
    //     hotOnly: true
    // }
    // contentBase
    static : {
        directory : path.join(__dirname, "public/")
      },
      port: 3000,
      // publicPath
      devMiddleware:{
         publicPath: "https://localhost:3000/dist/",
      },
      // hotOnly
      hot: "only",
    },
plugins : [new webpack.HotModuleReplacementPlugin()]    
}