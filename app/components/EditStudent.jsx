import React from 'react';
import { connect } from 'react-redux';
import { updateStudent } from './../reducers/students'

class EditStudent extends React.Component {
  constructor(){
    super();
    this.submit = this.submit.bind(this);
  }

  render(){
    return (
      <div className="list-group-item min-content user-item">
      <form onSubmit={this.submit}>
        <div className="media-left media-middle icon-container">
          <button
            type="submit"
            className="glyphicon glyphicon-plus clickable" />
        </div>
        <div className="media-body">
          <h4 className="media-heading tucked">
            <input
              name="name"
              type="text"
              placeholder="name"
              required
              className="form-like"
            />
          </h4>
          <h4 className="media-heading tucked">
            <input
              name="email"
              type="text"
              placeholder="email"
              required
              className="form-like"
            />
          </h4>
          <h4 className="media-heading tucked">
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
    const id = this.props.id;
    this.props.updateStudent(id, student);
    this.props.switchView();
  }
}

const mapState = ({ campuses, students }) => ({ campuses, students });
const mapDispatch = function(dispatch) {
  return {
    submit(student){
      dispatch(updateStudent(id, student))
    }
  }
};

export default connect(mapState, mapDispatch)(EditStudent);
