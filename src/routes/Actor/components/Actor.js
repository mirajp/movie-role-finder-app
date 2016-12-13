import React from 'react'
import { IndexLink, Link } from 'react-router'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {List, ListItem} from 'material-ui/List';

const actorData = {
  "aID": 591752,
  "name": "Robert Downey Jr.",
  "gender": "male",
  "movies": [
    {
      "mID": 2751962,
      "name": "A Scanner Darkly",
      "year": 2006,
      "duration": 100,
      "budget": 8700000,
      "gross": 5480996,
      "mpaa": "R",
      "role": "James Barris"
    },
    {
      "mID": 2820114,
      "name": "Avengers: Age of Ultron",
      "year": 2015,
      "duration": 141,
      "budget": 250000000,
      "gross": 458991599,
      "mpaa": "PG-13",
      "role": "Iron Man"
    },
    {
      "mID": 2820114,
      "name": "Avengers: Age of Ultron",
      "year": 2015,
      "duration": 141,
      "budget": 250000000,
      "gross": 458991599,
      "mpaa": "PG-13",
      "role": "Tony Stark"
    },
    {
      "mID": 2875131,
      "name": "Bowfinger",
      "year": 1999,
      "duration": 85,
      "budget": 55000000,
      "gross": 66365290,
      "mpaa": "PG-13",
      "role": "Jerry Renfro"
    },
    {
      "mID": 2898943,
      "name": "Captain America: Civil War",
      "year": 2016,
      "duration": 147,
      "budget": 250000000,
      "gross": 407197282,
      "mpaa": "PG-13",
      "role": "Iron Man"
    },
    {
      "mID": 2898943,
      "name": "Captain America: Civil War",
      "year": 2016,
      "duration": 147,
      "budget": 250000000,
      "gross": 407197282,
      "mpaa": "PG-13",
      "role": "Tony Stark"
    },
    {
      "mID": 2911211,
      "name": "Charlie Bartlett",
      "year": 2007,
      "duration": 97,
      "budget": 12000000,
      "gross": 3950294,
      "mpaa": "R",
      "role": "Nathan Gardner"
    },
    {
      "mID": 3023746,
      "name": "Due Date",
      "year": 2010,
      "duration": 95,
      "budget": 65000000,
      "gross": 100448498,
      "mpaa": "R",
      "role": "Peter Highman"
    },
    {
      "mID": 3107815,
      "name": "Fur: An Imaginary Portrait of Diane Arbus",
      "year": 2006,
      "duration": 122,
      "budget": 16800000,
      "gross": 220914,
      "mpaa": "R",
      "role": "Lionel Sweeney"
    },
    {
      "mID": 3133652,
      "name": "Gothika",
      "year": 2003,
      "duration": 98,
      "budget": 40000000,
      "gross": 59588068,
      "mpaa": "R",
      "role": "Pete Graham"
    },
    {
      "mID": 3176706,
      "name": "Home for the Holidays",
      "year": 1995,
      "duration": 103,
      "budget": 20000000,
      "gross": 17518220,
      "mpaa": "PG-13",
      "role": "Tommy Larson"
    },
    {
      "mID": 3225705,
      "name": "Iron Man",
      "year": 2008,
      "duration": 126,
      "budget": 140000000,
      "gross": 318298180,
      "mpaa": "PG-13",
      "role": "Iron Man"
    },
    {
      "mID": 3225705,
      "name": "Iron Man",
      "year": 2008,
      "duration": 126,
      "budget": 140000000,
      "gross": 318298180,
      "mpaa": "PG-13",
      "role": "Tony Stark"
    },
    {
      "mID": 3225708,
      "name": "Iron Man 2",
      "year": 2010,
      "duration": 124,
      "budget": 200000000,
      "gross": 312057433,
      "mpaa": "PG-13",
      "role": "Tony Stark"
    },
    {
      "mID": 3271678,
      "name": "Kiss Kiss Bang Bang",
      "year": 2005,
      "duration": 103,
      "budget": 15000000,
      "gross": 4235837,
      "mpaa": "R",
      "role": "Harry Lockhart"
    },
    {
      "mID": 3362253,
      "name": "Lucky You",
      "year": 2007,
      "duration": 124,
      "budget": 55000000,
      "gross": 5755286,
      "mpaa": "PG-13",
      "role": "Telephone Jack"
    },
    {
      "mID": 3583309,
      "name": "Richard III",
      "year": 1995,
      "duration": 104,
      "budget": 6000000,
      "gross": 2600000,
      "mpaa": "R",
      "role": "Lord Rivers"
    },
    {
      "mID": 3638394,
      "name": "Sherlock Holmes",
      "year": 2009,
      "duration": 128,
      "budget": 90000000,
      "gross": 209019489,
      "mpaa": "PG-13",
      "role": "Sherlock Holmes"
    },
    {
      "mID": 3638453,
      "name": "Sherlock Holmes: A Game of Shadows",
      "year": 2011,
      "duration": 129,
      "budget": 125000000,
      "gross": 186830669,
      "mpaa": "PG-13",
      "role": "Sherlock Holmes"
    },
    {
      "mID": 3731621,
      "name": "The Avengers",
      "year": 2012,
      "duration": 173,
      "budget": 220000000,
      "gross": 623279547,
      "mpaa": "PG-13",
      "role": "Iron Man"
    },
    {
      "mID": 3731621,
      "name": "The Avengers",
      "year": 2012,
      "duration": 173,
      "budget": 220000000,
      "gross": 623279547,
      "mpaa": "PG-13",
      "role": "Tony Stark"
    },
    {
      "mID": 3783086,
      "name": "The Judge",
      "year": 2014,
      "duration": 141,
      "budget": 50000000,
      "gross": 47105085,
      "mpaa": "R",
      "role": "Hank Palmer"
    },
    {
      "mID": 3827047,
      "name": "The Shaggy Dog",
      "year": 2006,
      "duration": 98,
      "budget": 50000000,
      "gross": 61112916,
      "mpaa": "PG",
      "role": "Dr. Kozak"
    },
    {
      "mID": 3828759,
      "name": "The Singing Detective",
      "year": 2003,
      "duration": 109,
      "budget": 8000000,
      "gross": 336456,
      "mpaa": "R",
      "role": "Dan Dark"
    },
    {
      "mID": 3830245,
      "name": "The Soloist",
      "year": 2009,
      "duration": 117,
      "budget": 60000000,
      "gross": 31670931,
      "mpaa": "PG-13",
      "role": "Steve Lopez"
    },
    {
      "mID": 3890684,
      "name": "Two Girls and a Guy",
      "year": 1997,
      "duration": 84,
      "budget": 1000000,
      "gross": 1950218,
      "mpaa": "R",
      "role": "Blake"
    },
    {
      "mID": 3982618,
      "name": "Zodiac",
      "year": 2007,
      "duration": 162,
      "budget": 65000000,
      "gross": 33048353,
      "mpaa": "R",
      "role": "Paul Avery"
    }
  ],
  "directors": [
    {
      "dID": 1304177,
      "name": "Richard Linklater"
    },
    {
      "dID": 2385268,
      "name": "Joss Whedon"
    },
    {
      "dID": 1674932,
      "name": "Frank Oz"
    },
    {
      "dID": 1929830,
      "name": "Anthony Russo"
    },
    {
      "dID": 1930047,
      "name": "Joe Russo"
    },
    {
      "dID": 1767504,
      "name": "Jon Poll"
    },
    {
      "dID": 1745727,
      "name": "Todd Phillips"
    },
    {
      "dID": 2024474,
      "name": "Steven Shainberg"
    },
    {
      "dID": 1124006,
      "name": "Mathieu Kassovitz"
    },
    {
      "dID": 2881870,
      "name": "Jodie Foster"
    },
    {
      "dID": 676677,
      "name": "Jon Favreau"
    },
    {
      "dID": 212631,
      "name": "Shane Black"
    },
    {
      "dID": 903451,
      "name": "Curtis Hanson"
    },
    {
      "dID": 1318031,
      "name": "Richard Loncraine"
    },
    {
      "dID": 1871100,
      "name": "Guy Ritchie"
    },
    {
      "dID": 575832,
      "name": "David Dobkin"
    },
    {
      "dID": 1876031,
      "name": "Brian Robbins"
    },
    {
      "dID": 828093,
      "name": "Keith Gordon"
    },
    {
      "dID": 2434185,
      "name": "Joe Wright"
    },
    {
      "dID": 2230765,
      "name": "James Toback"
    },
    {
      "dID": 696206,
      "name": "David Fincher"
    }
  ]
};


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
        <h2>{actorData['name']} ({actorData['gender']}) -- id: {actorData['aID']}</h2>
		<h1> </h1>
        <h4>Actor Associations</h4>
        <Table style={{tableLayout: 'auto'}}>
		{/*
		  <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{textAlign: 'center'}}>Movie Title</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Year</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Role</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Budget</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Gross</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>MPAA</TableHeaderColumn>
            </TableRow>
          </TableHeader>
        */}
		  <TableBody displayRowCheckbox={false}>
			<TableRow>
              <TableHeaderColumn style={{textAlign: 'center'}}>Movie Title</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Year</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Role</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Budget</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>Gross</TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: 'center'}}>MPAA</TableHeaderColumn>
            </TableRow>
            {actorData['movies'].map( (movie, index) => (
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
            ))}
          </TableBody>
        </Table>
        
		{/*
        <button className='btn btn-default' onClick={this.props.increment}>
          Increment
        </button>
        {' '}
        <button className='btn btn-default' onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
		*/}
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
