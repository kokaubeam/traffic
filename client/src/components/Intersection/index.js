import React, { Component } from 'react'
import Lane from '../Lane'
import TrafficLight from '../TrafficLight'
import css from './styles.css'

class Intersection extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={css.intersection}>
        <div className={css.center}></div>
        <div className={css.top}>
          <div className={css.trafficLight}>
            <TrafficLight></TrafficLight>
          </div>
          <Lane></Lane>
          <Lane></Lane>
        </div>
        <div className={css.right}>
          <div className={css.trafficLight}>
            <TrafficLight></TrafficLight>
          </div>
          <Lane></Lane>
          <Lane></Lane>
        </div>
        <div className={css.bottom}>
          <div className={css.trafficLight}>
            <TrafficLight></TrafficLight>
          </div>
          <Lane></Lane>
          <Lane></Lane>
        </div>
        <div className={css.left}>
          <div className={css.trafficLight}>
            <TrafficLight></TrafficLight>
          </div>
          <Lane></Lane>
          <Lane></Lane>
        </div>
        {children}
      </div>
    )
  }
}

export default Intersection
