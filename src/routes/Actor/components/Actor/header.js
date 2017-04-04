import React from 'react'

const Header = React.createClass({
  render() {
      const {name, gender, imgurl} = this.props;
    return (
      <div className="actor header">
            <h1>{name} ({gender})</h1>
            <img src={imgurl}></img>
      </div>
    );
  }
});


export default Header;
