import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const tableData = [
  {
    movie: 'Avengers 1',
    genre: [
      'Sci-Fi',
      'Adventure'
    ],
    role: 'Iron Man',
    director: [
      'Joss Whedon',
      'Will Whedon'
    ]
  },
  {
    movie: 'Avengers 2',
    genre: [
      'Fantasy',
      'Comedy'
    ],
    role: 'Tony Stark',
    director: [
      'Will Whedon'
    ]
  }
];

export const Actor = React.createClass({
  render() {
    return (
      <div style={{ margin: '1 auto' }} >
        <h2>Actor: {this.props.params.id} (gender:)</h2>
        
        <h4>Actor Associations</h4>
        <Table>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={{textAlign: 'center'}}>Movie Title</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Genre(s)</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Role</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Director(s)</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn style={{textAlign: 'center'}}>{row.movie}</TableRowColumn>
                <TableRowColumn style={{textAlign: 'center'}}>
                  {(row.genre).map( (genre, index) => (
                    <TableRow>
                      <TableRowColumn style={{textAlign: 'center'}}>{genre}</TableRowColumn>
                    </TableRow>
                  ))}
                </TableRowColumn>
                <TableRowColumn style={{textAlign: 'center'}}>{row.role}</TableRowColumn>
                <TableRowColumn style={{textAlign: 'center'}}>
                  {(row.director).map( (genre, index) => (
                    <TableRow>
                      <TableRowColumn style={{textAlign: 'center'}}>{genre}</TableRowColumn>
                    </TableRow>
                  ))}
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <button className='btn btn-default' onClick={this.props.increment}>
          Increment
        </button>
        {' '}
        <button className='btn btn-default' onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
      </div>
    );
  }
});

Actor.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Actor
