import React from 'react'

const Header = React.createClass({
  render() {
    const {name, gender} = this.props;
    return (
      <div className="actor header">
        <h1>{name} ({gender})</h1>
      </div>
    );
  }
});


export default Header;

