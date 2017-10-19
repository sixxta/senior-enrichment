/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { connect } from 'react-redux'
import { addStudent, removeStudent } from '../reducers/students'
// import { Link } from 'react-router-dom';
import Student from './Student';
import AddStudent from './AddStudent';

class AllStudents extends React.Component {

  render(){
    return (
    <div>
      <ul>
        <AddStudent addStudent={this.props.addStudent}/>
        {this.props.students.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase()).map(student => {return (
        <Student key={student.id} student={student} removeStudent={this.props.removeStudent}/>
        )}
      )}
       </ul>
    </div>
    )
  }

}


const mapState = ({ students }) => ({ students });
const mapDispatch = { addStudent, removeStudent };

export default connect(mapState, mapDispatch)(AllStudents);
