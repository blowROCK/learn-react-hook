import React, { useState } from "react";
import './app.css';

function App() {
  return (
    <div id="App">
      <CountHook />
      <CountClass />
    </div>
  );
}

function CountHook() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div className="countHook">
      <h1>Hook</h1>
      <p>count : {count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
}

class CountClass extends React.Component {
  state = {
    count: 0,
  };
  increase() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }
  decrease() {
    this.setState((state) => {
      return { count: state.count - 1 };
    });
  }
  render() {
    return (
      <div className="countClass">
        <h1>Class</h1>
        <p>count : {this.state.count}</p>
        <button onClick={() => this.increase()}>증가</button>
        <button onClick={() => this.decrease()}>감소</button>
      </div>
    );
  }
}

export default App;
