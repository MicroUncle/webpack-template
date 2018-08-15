// import htmlWebpackPlugin from 'html-webpack-plugin'
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')
module.exports =  {
    context: path.resolve(__dirname, '../src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|less)$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(css|scss|sass)$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader'
            },
            {
				test: /\.json$/,
				loader: 'json-loader'
			},
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                loader: 'url-loader',
                options: {
                  name:'img/[name].[ext]',
                  limit:10
                }
            }  
        ]
    },
    devServer: {
        port: 8080,
        hot: true,
        open: true,
        contentBase: path.resolve(__dirname, '../dist/')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'html-withimg-loader!./template/index.html',
            filename: 'index.html'
        }),
        new copyWebpackPlugin([
            {
                from: './assets/img',
                to: './assets/img'
            }
        ])
    ]
}