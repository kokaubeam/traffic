import React from 'react'
import css from './styles.css'

export default class Lane extends React.Component {
  render() {
    return (
      <svg height="96" width="296" version="1.1" viewBox="0 0 296 96">
        <path className={css.road} d="M 0 0L 296 0L 296 96L 0 96L 0 0Z"/>
        <path className={css.stripe} d="M 0 0L 64 0L 64 10L 0 10L 0 0Z" transform="translate(16 43)"/>
        <path className={css.stripe} d="M 0 0L 64 0L 64 10L 0 10L 0 0Z" transform="translate(112 43)"/>
        <path className={css.stripe} d="M 0 0L 64 0L 64 10L 0 10L 0 0Z" transform="translate(208 43)"/>
      </svg>
    )
  }
}