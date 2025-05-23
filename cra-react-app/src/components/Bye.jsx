import React, { Component } from "react";
import store from "../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../redux/count_action";
export default class Bye extends Component {
  state = { count: 0 };

  componentDidMount() {
    // 检测redux装填的变化 调用render
    store.subscribe(() => {
      this.setState({});
    });
  }
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value * 1));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;

    if (store.getState() % 2 !== 0)
      store.dispatch(createIncrementAction(value * 1));
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    // setTimeout(() => {
    //   this.setState({ count: count + value * 1 });
    // }, 1000);

    store.dispatch(createIncrementAsyncAction(value * 1, 1000));
  };
  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
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
