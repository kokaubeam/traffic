import React, { Component } from 'react'
import Lane from '../Lane'
import css from './styles.css'

class Intersection extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={css.intersection}>
        <div className={css.center}></div>
        <div className={css.top}>
          <Lane></Lane>
          <Lane></Lane>
        </div>
        <div className={css.right}>
          <Lane></Lane>
          <Lane></Lane>
        </div>
        <div className={css.bottom}>
          <Lane></Lane>
          <Lane></Lane>
        </div>
        <div className={css.left}>
          <Lane></Lane>
          <Lane></Lane>
        </div>
        {children}
      </div>
    )
  }
}

export default Intersection
