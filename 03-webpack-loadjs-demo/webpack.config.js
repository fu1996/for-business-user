const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// 引入该插件
const WebpackResolverModePlugin = require('@fu1996/webapck-resolver-mode-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// 使用cli 进行传参： https://webpack.docschina.org/api/cli/#environment-options
module.exports = (env) => {
    // 0.初始的webpack 对象
    console.log('init webpack config', env, process.env);
    const {user = '', mode = 'development'} = env;
    // 1.将 user 绑定到 node 环境的 process 对象上
    process.env.user = user;
    // 2. 验证是否绑定成功
    console.log('current user', process.env.user);
    /**
     * 此写法可以使用 webpack 配置类型 的自动补全
     * @type {import("webpack").Configuration}
     */
    const config = {
        mode,
        entry: path.join(__dirname, './src/index.jsx'),
        cache: {
          type: 'filesystem', // 使用文件缓存
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    oneOf: [
                        {
                            test: /\.js|jsx/,
                            include: path.join(__dirname, './src'),
                            loader: "babel-loader",
                            options: {
                                cacheDirectory: true,
                                presets: ["@babel/preset-react"]
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            // 此顺序也影响性能
            extensions: ['.jsx', '.js'],
            plugins: [
              new WebpackResolverModePlugin({
                excludes: /node_modules/, // 排除的目录
                includeFileSuffix: [".js", ".jsx"], // 参与条件渲染的文件后缀
                mode: user, // 目标 模式：根据此模式 自动打包
              })
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
              template: path.join(__dirname, './index.html'),
              filename: 'index.html',
            }),
          	// 增加 用户标识
            new webpack.DefinePlugin({
              'process.env.user': JSON.stringify(user)
            }),
            // 
            new CopyPlugin({
              patterns: [
                {
                  from: path.resolve(__dirname, './config.js'),
                  to: path.resolve(__dirname, `./dist/config.js`),
                },
              ],
            }),
          ]
    }
    return config;
}