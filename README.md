### 随笔

* es6模块导出(export)、导入(import)在不配置任何loader情况下，支持js模块导入
* 执行npx webpack，会将我们的脚本src/index.js作为入口，并会生成dist/main.js,npx webpack执行的是node_modules/.bin/webpack
* 为什么执行npx webpack就自动输出为 dist/main.js 文件中？
     > 因为webpack4 中可以无需任何配置，自动生成的main.js
 
* 新增加的webpack.config只是前面webpack4自动打包的一种实现

* 处理css样式的loader

     1. 如下代码块就可以在组件中使用 import './style.css' 来像js一样将css样式当做模块在源码也就是开发中使用啦.
    
     2. css-loader和style-loader必须同时使用，前者将css样式表转载成对象加进js code，后者将加进来的css包进<style></style>并放进head
    
        ```javascript
        
           rules: [
                 {
                   test: /\.css$/,
                   use: [
                     'style-loader',
                     'css-loader'
                   ]
                 }
               ]
          
        ```

* 引进file-loader，用于将各种资源如图片，像模块一样加载进来。

    ```javascript
    
      rules: [
            {
              test: /\.(png|jpg|jpeg|svg|gif)$/,
              use: [
                'file-loader'
              ]
            }
          ]
    
    ```
    
   **注意** ： 如果css中使用url: ('./my-img.jpg'),loader会识别这是个本地文件，并将该图片路径替换为 *输出目录* 的最终路径。然后html-loader同样以相同的方式处理<img src="./my-img.jpg" />
   
* 输出文件中的filename："[name].bundle.js" 原因就是name代表entry里面的key

    ```javascript
      module.exports = {
            entry: {
              app: './src/index.js',
              print: './src/print.js'
            },
            output: {
              filename: "[name].bundle.js",
              path: path.resolve(__dirname, 'dist')
            }
          };
    
    ```
  
* 使用source map ，在module.exports 对象里面加devtool

* webpack观察者模式虽然可以自动编译，但是需要手动刷新浏览器才可以

   ```json
      "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "webpack --config webpack.config.js",
          "build": "webpack",
          "watch": "wepack --watch"
        },
   ```
* 使用webpack-dev-server，可以自动监控源码变动并自动刷新浏览器, 另外start命令 "webpack-dev-server --open" 是通过CLI形式表示用webpackk-dev-server起服务之后自动打开浏览器。
* 生产环境也推荐使用source-map，为了调试源码和运行基准测试。[各种source-map区别]("https://juejin.im/post/58293502a0bb9f005767ba2f")

* webpack.DefinePlugin({})：

  1. 有些逻辑可能需要判断比如process.env.NODE_ENV这样的值，但是其是node的api，在浏览器环境下没有该api，为了可是使用，可以在
     webpack.prod.js里面define强制define出来
     
* 可以使用CLI但是不建议，可读性不强。

  1. 脚本里面 --optimize-minimize 标记将在后台引用 UglifyJSPlugin
  2. --define process.env.NODE_ENV="'production'" 可替代DefinePlugin操作