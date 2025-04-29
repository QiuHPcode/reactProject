// 为count生成action对象
import { INCREMENT, DECREMENT } from "./constant"
// 同步action指 番薯一般对象
export const createIncrementAction = (data) => {
    return { type: INCREMENT, data }
}

// 异步action指 返回函数
export const createIncrementAsyncAction = (data, time) => {

    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}

export const createDecrementAction = (data) => {
    return { type: DECREMENT, data }
}

