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
    this.update = this.update.bind(this);
  }

  componentDidMount () {
    const studentId = this.props.match.params.id;
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        this.setState({
          student,
          campus: this.props.campuses
            .filter(campus =>
              campus.id === student.campusId)[0]})
      });
  }

  render() {
    const student = this.state.student;
    return (
      <div>
      {(this.state.displayEdit
        ? <EditStudent
            id={this.state.student.id}
            updateStudent={this.props.updateStudent}
            update={this.update}
            switchView={this.switchView}
            name={student.name}
            email={student.email} />
        : <div>
            <button onClick={this.switchView}>Edit this information</button>
            <h3>{student.name}</h3>
            <h2>{student.email}</h2>
      </div>)}
      {(student.campus &&
            <h2>
            <Link key={student.campus.id} to={`/campuses/${student.campus.id}`}>
            {student.campus.name}
            </Link>
       </h2>)}
       </div>
    )
  }
  switchView(){
    this.setState({displayEdit: !this.state.displayEdit})
  }
  update(student){
    this.setState({ student })
  }

}

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = { updateStudent };

export default connect(mapState, mapDispatch)(SingleStudent);

