const htmlWebpackPlugin = require('html-webpack-plugin')
const {HotModuleReplacementPlugin} = require('webpack')
const {resolve} = require('path')
module.exports = {
    entry: {
        main: ['webpack-hot-middleware/client?reload=true', './src/main.tsx']
    },
    output: {
        path: resolve(__dirname, '..', 'dist'),
        filename: 'js/[name].[hash:6].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(jsx?|tsx?)$/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new HotModuleReplacementPlugin()
    ],
    mode: "development"
}