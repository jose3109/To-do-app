import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: './src/index.js',

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/main.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader'],
            },
            {
                test:/\.html$/i,
                loader:'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};