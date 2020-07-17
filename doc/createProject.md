> [Vue3.0完整工程步骤](https://juejin.im/post/5d9fd11af265da5bb414c1e0)
>
> [rollup配置指南](https://www.cnblogs.com/vajoy/p/5518442.html)

### 初始化npm

```bash
npm init -y
```



## Rollup打包

JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。

 比webpack要轻量许多，另外还具备tree-shaking的功能，最大的用途是打包生产一个库文件，打出来的包干净，没有其他冗余代码

### 安装

```js
npm install rollup -d
```



### 增加TS支持

#### rollup-plugin-typescript2

  打包typescript项目

```js
npm i rollup-plugin-typescript2 -d
```

### 初始化tsc

#### 安装typescript包

```bash
npm i typescript ts-node-dev @types/node -d
```

#### 创建tsconfig.json文件

```json
{
    "compilerOptions": {
        "outDir": "./lib",
        "target": "es2017",
        "module": "commonjs",//组织代码方式
        "sourceMap": true,
        "moduleResolution": "node", // 模块解决策略
        "experimentalDecorators": true, // 开启装饰器定义
        "allowSyntheticDefaultImports": true, // 允许es6方式import
        "lib": ["es2015"],
        "typeRoots": ["./node_modules/@types"],
    },
    "include": ["src/**/*"]
}
```

#### 创建index.js文件

```js
mkdir src
echo 'console.log("helloworld")' >> src/index.ts
```

#### 添加npm脚本

在package.json文件中添加

```
"scripts": {
    "start": "ts-node-dev ./src/index.ts -P tsconfig.json --no-cache",
    "build": "tsc -P tsconfig.json",
}
```