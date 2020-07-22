

// module.exports.createRenderer = () => ({
//     render: () => { },
//     // ssr渲染是
//     hydrate: () => { },
//     createApp: () => { }
//     // createAppAPI(render)
// })

import { createAppAPI } from './apiCreateApp'

export const createRenderer = (options) => {
    // Mock状态 render函数
    const render = (vnode, container) => {
        container.appendChild(vnode)
    }

    return {
        render,
        createApp: createAppAPI(render)
    }
}