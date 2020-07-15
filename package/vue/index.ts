// import {createRenderer} from '../runtime-core'
// const renderer = createRenderer({})
const Vue = {
    createApp: (options) => {
      return {
        mount: () => {
          console.log("vue mount....");
        },
      };
      // return renderer.createApp(options)
    },
  };
export default Vue
