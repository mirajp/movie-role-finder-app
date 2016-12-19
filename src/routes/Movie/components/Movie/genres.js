import React from 'react'
import {IndexLink, Link} from 'react-router'
//import './genres.scss'

const Genres = React.createClass({
  render() {
    const {genres} = this.props;
    const genreListItems = genres.map((genre, index) => {
      return (
        <li>{genre}</li>
      );
    });

    return (
      <div className="movie genres" id="content">
        <h3>Genre(s)</h3>
        <div className="columns">
          <ul style={{listStyleType: "none"}}>
            {genreListItems}
          </ul>
        </div>
      </div>
    );
  }
});


export default Genres;
