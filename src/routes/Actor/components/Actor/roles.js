import React from 'react'

import {IndexLink, Link} from 'react-router'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const RolesHeader = React.createClass({
  render() {
    return (
      <TableRow>
        <TableHeaderColumn style={{textAlign: 'center'}}>Movie Title</TableHeaderColumn>
        <TableHeaderColumn style={{textAlign: 'center'}}>Year</TableHeaderColumn>
        <TableHeaderColumn style={{textAlign: 'center'}}>Role</TableHeaderColumn>
        <TableHeaderColumn style={{textAlign: 'center'}}>Budget</TableHeaderColumn>
        <TableHeaderColumn style={{textAlign: 'center'}}>Gross</TableHeaderColumn>
        <TableHeaderColumn style={{textAlign: 'center'}}>MPAA</TableHeaderColumn>
      </TableRow>
    );
  }
});

const Roles = React.createClass({
  render() {
    const {movies} = this.props;
    const movieRows = movies.map((movie, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn style={{textAlign: 'center'}}>
            <IndexLink to={'/movie/' + movie['mID']}>{movie['name']}</IndexLink>
          </TableRowColumn>
          <TableRowColumn style={{textAlign: 'center'}}>{movie['year']}</TableRowColumn>
          <TableRowColumn style={{textAlign: 'center'}}>{movie['role']}</TableRowColumn>
          <TableRowColumn style={{textAlign: 'center'}}>{movie['budget']}</TableRowColumn>
          <TableRowColumn style={{textAlign: 'center'}}>{movie['gross']}</TableRowColumn>
          <TableRowColumn style={{textAlign: 'center'}}>{movie['mpaa']}</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <div className="actor roles">
        <Table style={{tableLayout: 'auto'}}>
          <TableBody displayRowCheckbox={false}>
            <RolesHeader/>
            {movieRows}
          </TableBody>
        </Table>
      </div>
    );
  }
});


export default Roles;


