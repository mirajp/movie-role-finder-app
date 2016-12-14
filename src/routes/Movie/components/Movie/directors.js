import React from 'react'
import {IndexLink, Link} from 'react-router'
//import './directors.scss'

const Directors = React.createClass({
  render() {
    const {directors} = this.props;
    const directorListItems = directors.map((director, index) => {
      return (
        <IndexLink to={'/director/' + director['dID']} key={index}><li>{director['name']}</li></IndexLink>
      );
    });

    return (
      <div className="movie directors" id="content">
        <h3>The Director(s)</h3>
        <div className="columns">
          <ul style={{listStyleType: "none"}}>
            {directorListItems}
          </ul>
        </div>
      </div>
    );
  }
});


export default Directors;
