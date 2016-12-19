import React from 'react'

//import movieData from '../../sample-data';

import PageHeader from './header';
import Actors from './actors';
import Genres from './genres';
import Directors from './directors';

const Movie = React.createClass({
  componentDidMount() {
    /* trigger an action to fetch actorData */
    const {id} = this.props.params;
    this.props.fetchMovieData(id);
  }
  
  , render() {
    const {movie, actors, genres, directors} = this.props;
    return (
      <div style={{ margin: '1 auto' }} >
        <PageHeader movie={movie} />
        <Genres genres={genres} />
        <Directors directors={directors} />
        <Actors actors={actors} />
      </div>
    );
  }
});

export default Movie
