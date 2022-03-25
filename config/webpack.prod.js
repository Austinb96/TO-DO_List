const path = require("path");
const config = require("./webpack.config");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
    mode:"production",
    output:{
        filename: "[name]-[contenthash].js",
        path:path.resolve(__dirname,
            "../dist"),
        assetModuleFilename: "images/[name].[hash][ext]",
    },
    plugins: [
        new MiniCssExtractPlugin({filename:"[name].[contenthash].css"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
        ]
    }
});