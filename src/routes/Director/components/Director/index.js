import React from 'react'

//import directorData from '../../sample-data';

import PageHeader from './header';
import Movies from './movies';
import Actors from './actors';

const Director = React.createClass({
  componentDidMount() {
    /* trigger an action to fetch DirectorData */
    const {id} = this.props.params;
    this.props.fetchDirectorData(id);
  }
  
  , render() {
    const {name, movies, actors} = this.props;
    return (
      <div style={{ margin: '1 auto' }} >
        <PageHeader name={name} />
        <Actors actors={actors} />
        <Movies movies={movies} />
      </div>
    );
  }
});

export default Director
