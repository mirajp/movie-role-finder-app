import React from 'react'

const Header = React.createClass({
  render() {
    const {movie} = this.props;
    var duration = "-";
    var budget = "-";
    var gross = "-";
    if (movie['duration'])
      duration = (movie['duration']) + " min";
    if (movie['budget'])
      budget= "$" + (movie['budget']);
    if (movie['gross'])
      gross = "$" + (movie['gross']);
    
    return (
      <div className="movie header">
        <h2>{movie['name']} ({movie['year']}) [{movie['mpaa']}]</h2>
        <h4>Duration: {duration},  Budget: {budget},  Gross: {gross}</h4>
      </div>
    );
  }
});


export default Header;

