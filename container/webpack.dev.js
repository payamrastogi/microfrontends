const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    devtool: "none", //remove eval function from main.js
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        chunkFilename: '[id]-[chunkhash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
    })],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    'css-loader', //2. Turns css into commonjs
                    "sass-loader" //1. turns sass into css
                ],
            },
        ]
    },
    devServer: {
        port: 3000,
        host: 'localhost',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        }
    }
});