import React from 'react';
import { connect } from 'react-redux'
import { addStudent, removeStudent } from '../reducers/students'
import { Link } from 'react-router-dom';

class AllStudents extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>
        <ul>
          {this.props.students.map(student => {return (
          <Link key ={student.id} to={`/students/${student.id}`}>
          <li key={student.id}>Name: {student.name} Email: {student.email}</li>
          </Link>)
          }
      )}
        </ul>
       </div>
    )
  }
}

const mapState = ({ students }) => ({ students });
const mapDispatch = { addStudent, removeStudent };

export default connect(mapState, mapDispatch)(AllStudents);

// {this.props.campuses.map(campus => {return (
//       <Link to={`/campuses/${campus.id}`}>
//         <li key={campus.id}>{campus.name}</li>
//       </Link>)}
