# 环境参数：

- Nodejs 10 版本以上
- webpack 4.26 版本以上

# 预备技能：

- 基本 Nodejs 知识和 Npm 指令
- 熟悉 ES6 语法

# Webpack 是什么

- webpack 是一种前端构建工具，一个静态模块打包器(module bundler)
- 在 webpack 看来，前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。
- 它将根据模块的依赖关系进行静态分析。打包生成对应的静态资源(bundle)

# 步骤

- npm init 生成 package.json
- npm i jquery 下载 jQuery 

# webpack 五个核心概念

1.  ## Entry

- 入口(Entry)指示 Webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

2. ## Output

- 输出(Output)指示 Webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。

3. ## Loader 帮助 webpack 翻译 不能识别的资源

- Loader 让 Webpack 能够去处理那些非 JavaScript 文件(webpack 自身只理解 JavaScript)

4. ## Plugins

- 插件(Plugins)可以用于执行范围更广的任务，插件的范围包括，从打包优化和压缩。一直到重新定义环境中的变量等。

5. ## Mode
   模式(Mode)指示 Webpack 使用相应模式的配置 两种模式
   - development 开发模式 能让代码本地测试运行的环境 (代码能运行即可)
   - production 生产模式 能让代码优化上线运行的环境 (代码要不断的优化)
