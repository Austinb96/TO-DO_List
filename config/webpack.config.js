const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = {
    entry:{
        main: "./src/main.js",
    },
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/views/index.html",
            filename:"index.html",
            inject:'body'
        }),
        new HtmlWebpackPlugin({
            template:"./src/views/pageB.html",
            filename:"pageB.html",
            inject:'body'
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, "../src/views/partials/navigation.html"),
            location: "navigation",
            priority: "replace",
            template_filename: "*",
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, "../src/views/partials/svg.html"),
            location: "CustomSVG",
            priority: "replace",
            template_filename: "*",
        })
    ],
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader: "babel-loader",
                }
            },
            {
                test:/\.html$/,
                use:[
                    "html-loader",
                ]
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                type:"asset/resource",
            },
        ]
    }
};