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
