import {createRenderer} from '../runtime-core'
const renderer = createRenderer({})
const createApp = (options) => {
  // Mock 空mount结构
  // return {
  //   mount: () => {
  //     console.log("vue mount....");
  //   },
  // };
  return renderer.createApp(options)
};

export { createApp };
