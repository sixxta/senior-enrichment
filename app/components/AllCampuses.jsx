import React from 'react';
import { connect } from 'react-redux';
import { addCampus, removeCampus } from './../reducers/campuses';
import { Link } from 'react-router-dom';

class AllCampuses extends React.Component {

  render(){
  return (
  <div>
    <ul>
      {this.props.campuses.map(campus => {return (
      <Link key={campus.id} to={`/campuses/${campus.id}`}>
        <li key={campus.id}>{campus.name}</li>
      </Link>)}
    )}
    </ul>
  </div>
  )
}}

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = { addCampus, removeCampus };

export default connect(mapState, mapDispatch)(AllCampuses);

