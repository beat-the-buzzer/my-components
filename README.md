# my-components

## 组件代码的定义和引用

`Vue.use(Card)`相当于执行了Card.install方法

```js
Card.install = function(Vue) {
  Vue.component(Card.name, Card)
}

Vue.use(Card) // Card.install
```

## 插槽与属性传参

## 打包——前端模块化

> 现代模块化的规范：以文件为模块，有自己的作用域

在一个文件里定义的变量、函数、类都是私有的，对其他文件不可见。

### CommonJS

 - 文件作用域
 - 缓存
 - 同步加载

同步加载意味着会阻塞

### AMD 

 - 文件作用域
 - 异步加载

 ### UMD

 - 先判断是否支持Node.js模块格式，即判断exports是否存在
 - 再判断是否支持AMD，即判断define是否存在
 - 若前两个都不存在，则将模块挂载到全局，即window或者global

## 如何调试组件

如果我们写的组件在线上有问题怎么办？

当然我们可以把线上的使用方式复制到我们的Demo中，但这样毕竟不能100%模拟线上的环境。我们需要想一个方法，在运行业务代码的时候，引用的是我们本地的公共组件库资源。

yalc：会在我们本地项目的node_modules里面安装一个临时的依赖包，然后在运行业务代码的时候，依赖于这个包。这样，我们就可以在业务代码中运行本地的组件库了。

```shell
npm install -g yalc # 全局安装yalc

# 组件库中运行
npm run build && yalc push # 执行了这个命令之后，我们的公共组件库就已经【发布】到本地的全局环境了

# 业务项目中运行
yalc add my-components # 执行了这个命令之后，我们本地的项目就已经安装了本地的公共组件

# 调试完成，将本地公共组件的关联移除
yalc remove my-components
```

通过以上的步骤，我们可以在业务代码里运行本地的公共组件。但是在实际操作中，我们用这种方式修改了公共组件之后，需要再次执行`npm run build && yalc push`，才能把我们的改动更新到业务代码中，没有热更新功能。我们可以使用其他工具去实现热更新：
 
 nodemon：可以监听文件的变化，然后执行相关命令
 
 ```shell
 npm install -g nodemon
 ```
 
 package.json中补充命令：
 ```json
 "scripts": {
    "publishToLocal": "npm run build && yalc push",
    "watch": "nodemon --ignore dist/ --ignore node_modules/ --watch packages/ -C -e js,vue,scss --debug -x 'npm run publishToLocal'"
 }
 ```
 
 这样，每次js、vue、scss文件有变化的时候，都会自动取执行一次编译和发布本地。