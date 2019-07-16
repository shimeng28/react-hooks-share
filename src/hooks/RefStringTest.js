import React, { PureComponent } from 'react';

class DataTable extends PureComponent {
  render() {
    const { renderRow } = this.props;
    return (
      <>
      {renderRow()}
      </>
    );
  }
}

class RefStringTest extends PureComponent {
  componentDidMount() {
    // console.log('this refs input...', this.refs.input);
    console.log('this refs input...', this.input);
  }
  renderRow = () => {
    // This won't work. Ref will get attached to DataTable rather than MyComponent:
    // return <input ref='input' />;

    // This would work though! Callback refs are awesome.
    return <input ref={input => this['input'] = input} />;
  }

  render() {
    return <DataTable data={this.props.data} renderRow={this.renderRow} />
  }
}

export default RefStringTest;