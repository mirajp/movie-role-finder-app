import React from 'react'

const Header = React.createClass({
  render() {
    const {name} = this.props;
    return (
      <div className="director header">
        <h2>{name}</h2>
      </div>
    );
  }
});


export default Header;

