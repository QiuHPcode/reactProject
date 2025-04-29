// 该文件专门暴露store对象

import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import countReducer from './count_reducer'
// 引入thunk用于异步action
import {thunk} from 'redux-thunk'
const store = createStore(countReducer, applyMiddleware(thunk))

export default store