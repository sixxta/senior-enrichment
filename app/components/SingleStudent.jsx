import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { updateStudent } from '../reducers/students'
import EditStudent from './EditStudent';

class SingleStudent extends React.Component {

  constructor () {
    super();
    this.state = {
      student: {},
      campus: {},
      displayEdit: false
    };
    this.switchView = this.switchView.bind(this);
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
    return (
      <div>
      {(this.state.displayEdit
        ? <EditStudent
            id={this.state.student.id}
            updateStudent={this.props.updateStudent}
            switchView={this.switchView} />
        : <div>
            <button onClick={this.switchView}>Edit this information</button>
            <h3>{student.name}</h3>
            <h2>{student.email}</h2>
            <h2>
            <Link key={studentsCampus.id} to={`/campuses/${studentsCampus.id}`}>
            {studentsCampus.name}
            </Link>
       </h2></div>)}
      </div>
    )
  }
  switchView(){
    this.setState({displayEdit: !this.state.displayEdit})
  }
}

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = { updateStudent };

export default connect(mapState, mapDispatch)(SingleStudent);

