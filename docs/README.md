# 快速开始

## 安装组件库

```bash
npm i my-components-only-test
```

## 引用组件库

> 在main.js中引用组件库

```js
// 全部引入
import 'my-components/dist/css/index.css'
import MUI from 'my-components'
Vue.use(MUI)

// 按需引入
import 'my-components/dist/css/demo.css'
import { Demo } from 'my-components'
Vue.use(Demo)
```