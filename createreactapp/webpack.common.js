const path = require("path");
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    //devtool: "none", //remove eval function from main.js
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options:{
                        name:"[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ],
    },
    plugins: [
        new ManifestPlugin({
            fileName: 'asset-manifest.json'
        })
    ]
};