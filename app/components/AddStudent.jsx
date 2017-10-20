import React from 'react';
import { connect } from 'react-redux';
import { addStudent } from './../reducers/campuses'

class AddStudent extends React.Component {
  constructor(){
    super();
    this.submit = this.submit.bind(this);
  }

  render(){
    return (
      <div>
      <form onSubmit={this.submit}>
        <div>
          <button type="submit">
          Add a student
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
          <h4>
            <input
              name="email"
              type="text"
              placeholder="email"
              required
              className="form-like"
            />
          </h4>
          <h4>
            <select name="campusId">
              {this.props.campuses.map(campus => { return (
                <option key={campus.id} value={campus.id}>{campus.name}</option>
              )})}
            </select>
          </h4>

        </div>
      </form>
    </div>
    )
  }

  submit(event) {
    event.preventDefault();
    const student = {
      name: event.target.name.value,
      email: event.target.email.value,
      campusId: event.target.campusId.value
    };
    this.props.addStudent(student);
    event.target.name.value = '';
    event.target.email.value = '';
  }
}

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = function(dispatch) {
  return {
    submit(student){
      dispatch(addStudent(student))
    }
  }
};

export default connect(mapState, mapDispatch)(AddStudent);
