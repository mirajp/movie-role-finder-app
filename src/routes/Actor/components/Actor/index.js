import React from 'react'

//import actorData from '../../sample-data';

import PageHeader from './header';
import Directors from './directors';
import Roles from './roles';

const Actor = React.createClass({
  componentDidMount() {
    /* trigger an action to fetch actorData */
    const {id} = this.props.params;
    this.props.fetchActorData(id);
  }
  
  , render() {
      const {name, gender, directors, movies, imgurl} = this.props;
    return (
      <div style={{ margin: '1 auto' }} >
            <PageHeader name={name} gender={gender} imgurl={imgurl} />
        <Directors directors={directors} />
        <Roles movies={movies} />
      </div>
    );
  }
});

export default Actor

