import { createElement, Component, render } from "./toy-react";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>my component</h1>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="test">
    <div>
      <div></div>
    </div>
    <div>123</div>
  </MyComponent>,
  document.body
);
