import React from 'react'

const Header = React.createClass({
  render() {
    const {name, gender} = this.props;
    return (
      <div className="actor header">
        <h2>{name} ({gender})</h2>
        <h4>Actor Associations</h4>
      </div>
    );
  }
});


export default Header;

