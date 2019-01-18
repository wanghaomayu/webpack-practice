### 随笔

* es6模块导出(export)、导入(import)在不配置任何loader情况下，支持js模块导入
* 执行npx webpack，会将我们的脚本src/index.js作为入口，并会生成dist/main.js,npx webpack执行的是node_modules/.bin/webpack
* 为什么执行npx webpack就自动输出为 dist/main.js 文件中？
 > 因为webpack4 中可以无需任何配置，自动生成的main.js 