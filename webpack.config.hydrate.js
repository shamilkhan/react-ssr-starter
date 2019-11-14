const path = require("path");

/**@description All paths */
const paths = {
    dist: path.join(__dirname, "dist")
};

module.exports = {
    entry: {
        hydrate: "./front/index-hydra.jsx"
    },
    output: {
        filename: "[name].js",
        path: paths.dist,
        library: "tester",
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
            }
        ]
    },
    resolve: {
        extensions: [".", ".js", ".jsx", "ts", ".tsx"]
    },
};
