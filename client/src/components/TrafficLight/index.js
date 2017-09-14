import React from 'react'
import css from './styles.css'

export default class TrafficLight extends React.Component {
  render() {
    return (
      <div>
        <svg height="96" width="48" version="1.1" viewBox="0 0 48 96">
          <path className={css.frame} d="M 0 0L 48 0L 48 96L 0 96L 0 0Z"/>
          <path className={css.stop} transform="translate(12 64)" d="M 24 12C 24 18.6274 18.6274 24 12 24C 5.37258 24 0 18.6274 0 12C 0 5.37258 5.37258 0 12 0C 18.6274 0 24 5.37258 24 12Z"/>
          <path className={css.warning} transform="translate(12 36)" d="M 24 12C 24 18.6274 18.6274 24 12 24C 5.37258 24 0 18.6274 0 12C 0 5.37258 5.37258 0 12 0C 18.6274 0 24 5.37258 24 12Z"/>
          <path className={css.go} transform="translate(12 8)" d="M 24 12C 24 18.6274 18.6274 24 12 24C 5.37258 24 0 18.6274 0 12C 0 5.37258 5.37258 0 12 0C 18.6274 0 24 5.37258 24 12Z"/>
        </svg>
      </div>
    )
  }
}
