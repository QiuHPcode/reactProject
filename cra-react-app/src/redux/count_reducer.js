import { INCREMENT, DECREMENT } from "./constant";

// 为COUnt服务的reducer  之前状态 行为函数 本身就是函数
const initState = 0
function countReducer(preState = initState, action) {
    console.log(preState, action);

    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            // 初始化
            return preState
    }

}
export default countReducer