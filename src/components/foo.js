import React from 'react'
import { InputItem } from 'antd-mobile'

class Foo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { foo: '' }
  }

  change(val) {
    this.setState({ foo: val })
  }

  render() {
    return (
      <div>
        <p>{this.state.foo}</p>
        <InputItem value={this.state.foo} onChange={this.change.bind(this)} />
      </div>
    )
  }
}

export default Foo
