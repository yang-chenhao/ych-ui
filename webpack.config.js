const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx' 
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'ych-ui',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ych-ui',
            template: 'index.html'
        })
    ]
}