import React, { Component } from 'react'
import css from './styles.css'

class Intersection extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={css.intersection}>
        <div className={css.center}></div>
        {children}
      </div>
    )
  }
}

export default Intersection
