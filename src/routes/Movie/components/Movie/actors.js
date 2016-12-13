import React from 'react'

import {IndexLink, Link} from 'react-router'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const ActorsHeader = React.createClass({
  render() {
    return (
      <TableRow>
        <TableHeaderColumn style={{textAlign: 'center'}}>Actor</TableHeaderColumn>
        <TableHeaderColumn style={{textAlign: 'center'}}>Role</TableHeaderColumn>
      </TableRow>
    );
  }
});

const Actors = React.createClass({
  render() {
    const {actors} = this.props;
    const actorRows = actors.map((actor, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn style={{textAlign: 'center'}}>
            <IndexLink to={'/actor/' + actor['aID']}>{actor['name']}</IndexLink>
          </TableRowColumn>
          <TableRowColumn style={{textAlign: 'center'}}>{actor['role']}</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <div className="movie actors">
        <h3>Cast</h3>
        <Table style={{tableLayout: 'auto', width: '50%', margin: '0px auto', textAlign: 'center'}}>
          <TableBody displayRowCheckbox={false}>
            <ActorsHeader/>
            {actorRows}
          </TableBody>
        </Table>
      </div>
    );
  }
});


export default Actors;
