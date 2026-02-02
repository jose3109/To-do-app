import { merge } from 'webpack-merge'
import common from "./webpack.common.js";
import path from "node:path";

export default merge(common, {
    mode: 'production',

    output: {
        filename: 'main.js',
        path: path.resolve(import.meta.dirname, 'dist'),
        clean: true,
    },
});