const path = require('path')
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { defineConfig } = require('@vue/cli-service')
const config = () => {
  const node_env = process.env.NODE_ENV;
  const production = node_env === 'production';

  if (production) {
    return {
      transpileDependencies: true,
      lintOnSave: false,
      outputDir: path.join(__dirname, '/package'),
      configureWebpack: {
        entry: './lib/index.js',
        resolve: {
          alias: {
            '@': path.resolve('lib')
          }
        },
        output: {
          filename: '[name].js',  
          library: 'login',
          libraryTarget: 'umd',
          libraryExport: 'default',
          globalObject: 'this'
        },
        externals: {
          vue: {  //将vue依赖 "外部化"，不打包进组件库
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
          }, 
          vuex: 'vuex',
          'element-ui': 'ElementUI',
          axios: 'axios'
        },
        plugins: [
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
          }),
          new BundleAnalyzerPlugin(),
        ],
        module: {
          rules: [
            {
              test: /.(jpe?g|png|gif|svg)$/,
              type: 'asset',
              parser: {
                //转base64的条件
                dataUrlCondition: {
                maxSize: 100 * 1024, // 12kb
                }
              }, 
            },
          ]
        }
      },
      css: {
        extract: false,
      }
    }
  } else {
    return {
      transpileDependencies: true,
      lintOnSave: false,
      configureWebpack: {
        entry: './src/main.js',
        plugins:[
          new BundleAnalyzerPlugin(),
        ],
        resolve: {
          alias: {
            '@': path.resolve('src')
          }
        },
      },
    }
  }
}

const _config = config();
module.exports = defineConfig(_config);