// 源码结构版本
// module.export.createAppAPI = () => {
//     return function createApp() {
//         const App = {
//             mount() {

//             },
//             use() {

//             },
//             mixin() {

//             },
//             component() {

//             },
//             directive() {

//             },
//             unmount() {

//             },
//             provide() {

//             }
//         }
//         return App
//     }
// }

// 创建Mock虚拟节点
const createVNode = (rootComponent) => {
  const vnode = document.createDocumentFragment();
  const h1 = document.createElement("h1");
  h1.innerText = "vue3初始化流程";
  const p = document.createElement("p");
  p.innerText = rootComponent.data().foo;
  vnode.appendChild(h1);
  vnode.appendChild(p);
  return vnode;
};

export const createAppAPI = (render) => {
  return function createApp(rootComponent) {
    const app = {
        // // 定义响应函数
        // let effective

        // // 数据劫持
        // observed = new Proxy(config.data(), {
        //     set(target, key, value, receiver) {
        //         const ret = Reflect.set(target, key, value, receiver)
        //         // 触发函数响应
        //         effective()
        //         return ret
        //     },
        // })


      mount(rootContainer) {
        // const container = document.querySelector(rootContainer)
        // const vnode = createVNode(rootComponent)
        // render(vnode, container)

        // effective = () => render(observed, dom);
        // render(observed, dom);
      },
    };
    return app;
  };
};
