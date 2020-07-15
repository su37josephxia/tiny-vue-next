import { createRenderer } from "../runtime-core";
const renderer = createRenderer({});

window["Vue"] = {
  // createApp: (options) => {
  //     return {
  //       mount: () => {
  //         console.log("vue mount....");
  //       },
  //     };
  //     // return renderer.createApp(options)
  //   },

  createApp: (options) => renderer.createApp(options),
};
