const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        bootstrapJs: "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        bootstrapCss: "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        jquery: "./node_modules/jquery/dist/jquery.min.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ]
};