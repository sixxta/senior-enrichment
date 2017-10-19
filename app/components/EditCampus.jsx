import React from 'react';
import updateCampus from './../reducers/campuses';
import { connect } from 'react-redux';
import updateStudent from './../reducers/students';

class EditCampus extends React.Component {
  constructor(){
    super();
    this.state = {
      students: []
    }
    this.submit = this.submit.bind(this);
    this.updateStudentCampus = this.updateStudentCampus.bind(this);
  }

  render(){
    return (
      <div>
      <form onSubmit={this.submit}>
        <div>
          <button
          type="submit"
          className="clickable">
            Submit Edits
          </button>
        </div>
        <div>
          <h4>
            <input
              name="name"
              type="text"
              placeholder="name"
              required
              className="form-like"
            />
          </h4>
        </div>
      </form>
      <div>
        <ul>
        {this.props.students.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase()).map(student => {
          const studentInCampus = (student.campusId === this.props.id)
          return (
            <div key={student.id}>
            <li key={student.id} value={student.id}>
            {student.name}</li>
            <button value={studentInCampus} id={student.id} onClick={this.updateStudentCampus}>{studentInCampus ? 'Delete' : 'Add'}
            </button>
            </div>
          )
        })}
        </ul>
      </div>
    </div>
    )
  }
  submit(event) {
    event.preventDefault();
    const campus = {
      name: event.target.name.value,
    };
    const id = this.props.id;
    console.log(campus);
    this.props.updateCampus(id, campus);
  }
  updateStudentCampus(event){
    event.stopPropagation();
    let newStudent = {campusId: undefined}
    console.log(event.target.id, event.target.value)
    if (event.target.value === "false" ) {
      newStudent.campusId = Number(this.props.id)
    } else {
      newStudent.campusId = null
    }
    console.log(newStudent)
    this.props.updateStudent(event.target.id, newStudent);
  }

}

const mapState = ({ campuses, students }) => ({ campuses, students });
const mapDispatch = function(dispatch) {
  return {
    submit(campus){
      dispatch(updateCampus(id, campus))
    },
    onClick(id, student){
      dispatch(updateStudent(id, student))
    }
  }
};

export default connect(mapState, mapDispatch)(EditCampus);

