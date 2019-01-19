### 随笔

* es6模块导出(export)、导入(import)在不配置任何loader情况下，支持js模块导入
* 执行npx webpack，会将我们的脚本src/index.js作为入口，并会生成dist/main.js,npx webpack执行的是node_modules/.bin/webpack
* 为什么执行npx webpack就自动输出为 dist/main.js 文件中？
 > 因为webpack4 中可以无需任何配置，自动生成的main.js
 
* 新增加的webpack.config只是前面webpack4自动打包的一种实现
* 如下代码块就可以在组件中使用 import './style.css' 来像js一样将css样式当做模块在源码也就是开发中使用啦

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
