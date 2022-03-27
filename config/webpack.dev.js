const path = require("path")
const config = require("./webpack.config.js");
const {merge} = require("webpack-merge");
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');

module.exports = merge(config,{
    mode:"development",
    output:{
    filename: "[name].js",
        path:path.resolve(__dirname,
        "../dist"),
        assetModuleFilename: "images/[name][ext]",
    },
    module: {
        rules:[
            {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
        ]
    },
    plugins: [
        new ExtraWatchWebpackPlugin({
            dirs: [ path.join(__dirname, 'src/views/partials')],
        }),
    ],
    devServer:{
        open: true,
        host: "127.0.0.1",
        hot: true,
        port: 8080,
        watchFiles: "./src/**/*",
        static: {
            directory: path.join(__dirname, "../dist"),
            watch: true,
        },
        client: {
            overlay: true,
        },
    },
});

