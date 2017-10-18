import React from 'react';
import axios from 'axios';

class SingleStudent extends React.Component {

  constructor () {
    super();
    this.state = {
      student: {}
    };
  }

  componentDidMount () {
    const studentId = this.props.match.params.id;
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({
        student
      }));
  }

  render() {
    const student = this.state.student;
    return (
      <div>
        <h3>{student.name}</h3>
        <h2>{student.email}</h2>
      </div>
    )
  }
}

export default SingleStudent;
