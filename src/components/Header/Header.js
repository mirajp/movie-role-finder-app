import React from 'react'
import AppBar from 'material-ui/AppBar'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <AppBar title="Movie Role Finder" />
    {/*
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    */}
  </div>
)

export default Header