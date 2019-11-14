const path = require("path");

module.exports = {
    entry: './server.js',
    output: {
        path: __dirname,
        filename: 'server-build.js'
    },
    target: 'node',
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
                        ]
                    }
                }
            }
        ]
    }
}