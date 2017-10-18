import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeStudent } from '../reducers/students'

class Student extends React.Component {
  constructor(props){
    super(props)
    this.removeStudentCallback = this.removeStudentCallback.bind(this);
  }
  render(){

    const { student } = this.props;
    return (
      <div key={student.id}>
        <NavLink to={`/students/${student.id}`}>
        <li> Name: {student.name} Email: {student.email}</li>
        </NavLink>
        <button className="btn btn-default" onClick={this.removeStudentCallback}>X
        </button>
       </div>
    )
  }

  removeStudentCallback (event) {
    event.stopPropagation();
    const id = this.props.student.id;
    this.props.onClick(id)
  }
}

const mapState = ({ students }) => ({students})
const mapDispatchToProps = function(dispatch){
  return {
    onClick(id) {
      dispatch(removeStudent(id))
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Student);
