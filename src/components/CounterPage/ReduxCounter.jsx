import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'
import { increment } from 'redux/actions/counter'

class ReduxCounter extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
  	this.props.dispatch(increment())
  }

  render () {
  	return <Counter value={this.props.value} onClick={this.handleClick} />
  }
}

function mapStateToProps (state) {
  const { value } = state.counter
  return { value }
}

export default connect(mapStateToProps)(ReduxCounter)
