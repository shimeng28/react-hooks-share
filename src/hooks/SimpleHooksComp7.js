import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import RefStringTest from './RefStringTest';

class TextInput extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
  };
  static defaultProps = {
    value: '',
  };

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  focusInput = () => {
    this.input.current.focus();
  }

  render() {
    const { value, onChange } = this.props;
    return (
      <input
        ref={this.input}
        value={value}
        onChange={onChange}
      />
    );
  }
}

// const FuncInput = (props) => (<input ref={ref} {...props} />);
const FuncInput = React.forwardRef((props, ref) => (<input ref={ref} {...props} />));

export default class RefLearn extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '小时哥 Ref learning',
    };

    this.divRef = null;
    this.textRef = React.createRef();
    this.classCompRef = React.createRef();
    this.funcRef = React.createRef();
  }

  componentDidMount() {
    // refs字符串
    this.refs.span.textContent = 'Ref 字符串 change';

    // createRef
    this.textRef.current.focus();

    console.log('class component ref...', this.classCompRef);
    console.log('func component ref...', this.funcRef);
  }

  inputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  refCallback = (ele) => {
    console.log('ref callback ', ele);
    this.divRef = ele;
  }

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <span ref="span">Ref 字符串 会有问题</span>
        {/* <RefStringTest /> */}
        <div
          ref={(ele) => {
            console.log('内联函数 ref ', ele);
            this.divRef = ele;
          }}
        >Ref 回调 --- 内联函数</div>
        <div ref={this.refCallback}>Ref 回调 --- 内联函数</div>
        <input
          ref={this.textRef}
          value={value}
          onChange={this.inputChange}
        />
        <TextInput
          ref={this.classCompRef}
          value={value}
          onChange={this.inputChange}
        />
        <FuncInput
          ref={this.funcRef}
        />
      </React.Fragment>
    )
  }
}