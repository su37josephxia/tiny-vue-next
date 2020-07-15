

// module.exports.createRenderer = () => ({
//     render: () => { },
//     // ssr渲染是
//     hydrate: () => { },
//     createApp: () => { }
//     // createAppAPI(render)
// })

import { createAppAPI } from './apiCreateApp'

export const createRenderer = (options) => {
    const render = (vnode, container) => {
        container.appendChild(vnode)
    }
    return {
        render,
        createApp: createAppAPI(render)
    }
}