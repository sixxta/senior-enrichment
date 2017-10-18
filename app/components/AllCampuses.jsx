/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { connect } from 'react-redux';
import { removeCampus, addCampus } from './../reducers/campuses';
import Campus from './Campus';
import AddCampus from './AddCampus';

class AllCampuses extends React.Component {
  render(){
    return (
    <div>
      <AddCampus addCampus={this.props.addCampus} />
      <ul>
        {this.props.campuses.map(campus => {return (
        <Campus key={campus.id} campus={campus} removeCampus={this.props.removeCampus} />
        )}
      )}
      </ul>
    </div>
    )
}}

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = { addCampus, removeCampus };

export default connect(mapState, mapDispatch)(AllCampuses);

