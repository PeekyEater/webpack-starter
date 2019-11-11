const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                use: 'file-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['main'],
            template: './src/views/index.html',
            favicon: './src/images/favicon.ico'
        })
    ]
};