const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',

    },

    devtool: 'source-map',
    
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },

                }
            },

            {
                test: /\.(png|jpg|svg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'new app',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]


}