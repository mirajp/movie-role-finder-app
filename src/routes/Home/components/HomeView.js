import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <a href="http://movieroles.ddns.net:8000"  target="_self"><img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} /></a>
  </div>
)

export default HomeView
