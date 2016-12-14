import React from 'react'
import {IndexLink, Link} from 'react-router'
import './actors.scss'

const Actors = React.createClass({
  render() {
    const {actors} = this.props;
    const actorListItems = actors.map((actor, index) => {
      return (
        <IndexLink to={'/actor/' + actor['aID']} key={index}><li>{actor['name']}</li></IndexLink>
      );
    });

    return (
      <div className="director actors" id="content">
        <h3>Actors Directed</h3>
        <div className="columns">
          <ul>
            {actorListItems}
          </ul>
        </div>
      </div>
    );
  }
});


export default Actors;
