import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeStudent, updateStudent } from '../reducers/students'

class SingleStudent extends React.Component {

  constructor () {
    super();
    this.state = {
      student: {},
      campus: {}
    };
  }

  componentDidMount () {
    const studentId = this.props.match.params.id;
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {this.setState({
        student
      });
    this.setState({ campus: this.props.campuses.filter(campus => campus.id === student.campusId)[0]})
    }
    );
  }

  render() {
    const student = this.state.student;
    const studentsCampus = this.state.campus;
    console.log(studentsCampus);
    return (
      <div>
        <h3>{student.name}</h3>
        <h2>{student.email}</h2>
        <h2>
          <Link key ={studentsCampus.id} to={`/campuses/${studentsCampus.id}`}>
          {studentsCampus.name}
          </Link>
        </h2>
      </div>
    )
  }
}

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = { removeStudent, updateStudent};

export default connect(mapState, mapDispatch)(SingleStudent);

