

const HtmlWebpackPlugin = require('html-webpack-plugin');



  const path = require('path');

//webpack.config.js
module.exports = (env) => {

    return {
        mode: env || 'production',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options: {
                        plugins: env !== 'production' ? ["react-hot-loader/babel"] : []                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body'
          })]
    }
};