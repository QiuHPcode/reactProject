// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";
// 引入redux的store
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

import React, { Component } from "react";

class CountUI extends Component {
  // state = { count: 0 };

  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1);
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) this.props.jia(value * 1);
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    // setTimeout(() => {
    //   this.setState({ count: count + value * 1 });
    // }, 1000);
    this.props.jiaAsync(value * 1, 1000);
  };
  render() {
    console.log("UIprops", this.props);

    return (
      <div>
        <h2>当前求和为：{this.props.count}</h2>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementIfOdd}>求和为奇数+</button> &nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

// connect第一次调用传递两个参数
// mapStateToProps函数的返回值对象
// 对象的Key作为状态传递给了UI组件props的key,value就作为传递给ui组件props的value
// 用于传递状态
const mapStateToProps = (state) => {
  return { count: state };
};
// mapDispatchToProps函数的返回值对象
// 对象的Key作为状态传递给了UI组件props的key,value就作为传递给ui组件props的value
// 用于传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
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
};

// mapDispatchToProps精简版写法 自动dispatch调用分发
const Dispatch = {
  jia: createIncrementAction,
  jian: createDecrementAction,
  jiaAsync: createIncrementAsyncAction,
};

const CountContainer = connect(mapStateToProps, Dispatch)(CountUI);

// 暴露容器组件
export default CountContainer;
