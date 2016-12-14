import React from 'react'
import {IndexLink, Link} from 'react-router'
import './directors.scss'

const Directors = React.createClass({
  render() {
    const {directors} = this.props;
    const directorListItems = directors.map((director, index) => {
      return (
        <IndexLink to={'/director/' + director['dID']} key={index}><li>{director['name']}</li></IndexLink>
      );
    });

    return (
      <div className="actor directors" id="content">
        <h3>Actor's Directors</h3>
        <div className="columns">
      {/*<ul style={{listStyleType: "none"}}>*/}
          <ul>
            {directorListItems}
          </ul>
        </div>
      </div>
    );
  }
});


export default Directors;
