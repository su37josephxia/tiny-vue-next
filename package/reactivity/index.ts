
let effective
export function effect(fun) {
    effective = fun
}

export function reactive(data) {
    if (typeof data !== 'object' || data === null) {
        return data
    }
    const observed = new Proxy(data, {
        get(target, key, receiver) {
            // 普通写法
            // return target[key]
            // proxy + reflect 反射
            // Reflect有返回值不报错
            let result = Reflect.get(target, key, receiver)

            // return result
            // 多层代理
            return typeof result !== 'object' ? result : reactive(result) 
        },
        set(target, key, value, receiver) {
            effective()
            // 普通写法
            // target[key] = value // 如果设置不成功 没有返回
            // proxy + reflect
            const ret = Reflect.set(target, key, value, receiver)
            return ret
        },

        deleteProperty(target,key){
            const ret = Reflect.deleteProperty(target,key)
            return ret
        }

    })
    return observed
}

