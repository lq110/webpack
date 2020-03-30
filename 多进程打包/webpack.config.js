const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 处理css兼容
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"); //压缩css
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 1. 引入插件 pwa离线缓存
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
/*
  PWA :渐进式网络开发应用程序(离线可访问)
  workbox --> workbox-webpack-plugin
  下载包：npm i  workbox-webpack-plugin -D
 */

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  "css-loader",
  {
    // 还需要在package.json中配置browserlist
    /**
     * "browserslist": {
          "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
          ],
          "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
           ]
        }
    */
    loader: "postcss-loader",
    options: {
      ident: "postcss",
      plugins: () => [require("postcss-preset-env")()]
    }
  }
];
/*
tree shaking 去除无用代码
 前提：1.使用es6模块化 2.开启production环境
 作用：减少代码体积

  在package.json中配置
    "sideEffects": false所有代码都没有副作用(都可以进行 tree shaking)
    问题:可能会把css / @babel/polyfill (副作用)文件干掉
    "sideEffects":["*css"] // 不干掉css文件
*/
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.[contenthash:10].js",
    path: resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        // 在package.json中eslintConfig --> airbnb
        /*
       "eslintConfig": {
         "extends": "airbnb-base"
       }
      */
        test: /\.js$/, //js语法检查
        exclude: /node_modules/,
        // 优先执行
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      // 以下loader只会匹配一个
      // 注意：不能有两个配置处理同一种类型的文件
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [...commonCssLoader]
          },
          {
            test: /\.less$/,
            use: [...commonCssLoader, "less-loader"]
          },
          /*
      正常来讲，一个文件只能被一个loader处理
      当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
       先执行eslint 在执行babel
      */

          {
            test: /\.js$/, //js兼容
            exclude: /node_modules/,
            use: [
              /*
                开启多进程打包
                进程启动大概为600ms,进程通信也有开销
                只有工作消耗时间比较长，才需要多进程打包
                在js代码比较多的时候才可以体现出速度快
              */
              {
                loader: "thread-loader",
                options: {
                  workers: 2 // 进程2个
                }
              },
              {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        useBuiltIns: "usage",
                        corejs: {
                          version: 3
                        },
                        targets: {
                          chrome: "60",
                          firefox: "50",
                          ie: "9" //  可以兼容到IE9
                        }
                      }
                    ]
                  ],
                  // 开启babel缓存
                  // 第二次构建时，会读取之前的缓存
                  cacheDirectory: true
                }
              }
            ]
          },
          {
            test: /\.(jpg|png|gif)/,
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              name: "[hash:10].[ext]",
              outputPath: "imgs",
              esModule: false
            }
          },
          {
            test: /\.html$/,
            loader: "html-loader"
          },
          {
            exclude: /\.(js|css|less|html|jpg|png|gif)/,
            loader: "file-loader",
            options: {
              outputPath: "media"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/built.[contenthash:10].css"
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    // 2.使用pwa 离线缓存插件
    new WorkboxWebpackPlugin.GenerateSW({
      /*
        1.clientsClaim 帮助serviceworker快速启动
        2.skipWaiting 删除旧的 serviceworker

        生成一个serviceworker 配置文件
      */
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  mode: "production",
  devtool: "source-map"
};
