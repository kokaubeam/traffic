import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Intersection from '../../components/Intersection'
import css from './styles.css'

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={css.container}>
        <Intersection></Intersection>
        {children}
      </div>
    )
  }
}

export default connect((() => {})(), (() => {})())(App)