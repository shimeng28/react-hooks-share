import React, { PureComponent } from 'react';
import { Input } from 'antd';

const NameContextDemo = React.createContext('default');
const AgeContextDemo = React.createContext('default');

class Parent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      age: '24',
      name: '小时哥'
    };
  }

  inputChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    const { name, age } = this.state;
    return (
      <>
        <label>name:</label>
        <Input
          type="text"
          value={name}
          onChange={this.inputChange}
        />
        <NameContextDemo.Provider value={name}>
          <AgeContextDemo.Provider value={age}>
            {this.props.children}
          </AgeContextDemo.Provider>
        </NameContextDemo.Provider>
      </>
    )
  }
}

class Child1 extends PureComponent {
  static contextType = NameContextDemo;
  render() {
    return (
      <div>{this.context}</div>
    )
  }
}

const Child2 = () => (<NameContextDemo.Consumer>
  {value => (
    <div>Function Context value: {value}</div>
  )}
</NameContextDemo.Consumer>);

const Child3 = () => (
  <AgeContextDemo.Consumer>
    {
      (age) => (
        <NameContextDemo.Consumer>
        {
          (name) => (<span>name: {name}, age: {age}</span>)
        }
        </NameContextDemo.Consumer>)
    }
  </AgeContextDemo.Consumer>
)

export default () => (
  <>
    <Parent>
      <Child1 />
      <Child2 />
      <Child3 />
    </Parent>
  </>
)