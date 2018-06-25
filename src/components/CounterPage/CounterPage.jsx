import PageHeader from 'react-bootstrap/lib/PageHeader'
import React, { Component } from 'react'
import ReduxCounter from './ReduxCounter'

class CounterPage extends Component {
  render () {
  	return (
      <div>
      <PageHeader>Counters</PageHeader>
      <h3>State Counter</h3>
      <ReduxCounter />
    </div>
    )
  }
}

export default CounterPage
