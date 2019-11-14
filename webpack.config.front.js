const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

/**@description All paths */
const paths = {
    src: "./front/index.jsx",
    dist: path.join(__dirname, "dist")
};

module.exports = {
    entry: {
        index: paths.src,
    },
    output: {
        filename: "[name].js",
        path: paths.dist,
        library: "tester",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader",
                options: {
                    name: "[name].[ext]"
                }
            }
        ]
    },
    resolve: {
        extensions: [".", ".js", ".jsx", "ts", ".tsx"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CopyPlugin([{
            from: "index.html",
            to: "index.html"
        }])
    ],
    devServer: {
        port: 3001,
        contentBase: path.join(__dirname, "dist")
    }
};
