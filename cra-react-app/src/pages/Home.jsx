import React, { useState } from "react";
import { Navigate } from "react-router-dom";
export default function Home() {
  const [sum, setSum] = useState(1);
  return (
    <div>
      我是Home
      <div>{sum === 2 ? <Navigate to="/about"  /> : `当前sum的值是：${sum}`}</div>
      <button
        onClick={() => {
          setSum(2);
        }}
      >
        点我将变成2
      </button>
    </div>
  );
}
