import { merge } from 'webpack-merge';
import common from "./webpack.common.js";
import path from "node:path";

export default merge(common, {
    mode: 'development',

    devtool: 'eval-source-map',

    devServer: {
        watchFiles: ['./src/template.html'],
        static: path.resolve(import.meta.dirname, 'dist'),
        open: true,
    },

    output: {
        filename: 'main.js',
        path: path.resolve(import.meta.dirname, 'dist'),
        clean: true,
    },
});
