import { resolve } from "path"
import type { Configuration } from "webpack"

const config: Configuration = {
    optimization: {
        minimize: false,
    },
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, "dist"),
    },
}

export default config
