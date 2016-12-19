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
     */
    <a href='http://movieroles.ml:8000/'>
      Home
    </a>
    }
  </div>
)

export default Header
