const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const publicPath = () =>isDev ?'/':'/mesto';
const autoprefixer = require('autoprefixer');
module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    entry: './pages/index.js',
    devtool: isDev ? 'source-map' : false,
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        publicPath: publicPath()
    },
    resolve: {
        extensions: ['.js', ',json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        port: 3030,
        hot: isDev,
        open: true,
        compress: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        autoprefixer,
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    // добавьте объект options
                    options: {importLoaders: 1}
                },
                    'postcss-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                // регулярное выражение, которое ищет все js файлы
                test: /\.js$/,
                // при обработке этих файлов нужно использовать babel-loader
                use: 'babel-loader',
                // исключает папку node_modules, файлы в ней обрабатывать не нужно
                exclude: '/node_modules/'
            }
        ]
    }
}