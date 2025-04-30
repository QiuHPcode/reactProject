// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";
// 引入COUNTUI组件
import CountUI from "../../components/CountUI";
// 引入redux的store
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

// connect第一次调用传递两个参数
// mapStateToProps函数的返回值对象
// 对象的Key作为状态传递给了UI组件props的key,value就作为传递给ui组件props的value
// 用于传递状态
function mapStateToProps(state) {
  return { count: state };
}
// mapDispatchToProps函数的返回值对象
// 对象的Key作为状态传递给了UI组件props的key,value就作为传递给ui组件props的value
// 用于传递操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => {
      // 通知redux执行方法
      dispatch(createIncrementAction(number));
    },
    jian: (number) => {
      dispatch(createDecrementAction(number));
    },
    jiaAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time));
    },
  };
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);
// 暴露容器组件
export default CountContainer;
