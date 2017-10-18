import React from 'react';
import { connect } from 'react-redux';
import { addCampus } from './../reducers/campuses'

class AddCampus extends React.Component {
  constructor(){
    super();
    this.submit = this.submit.bind(this);
  }

  render(){
    return (
      <div className="list-group-item min-content user-item">
      <form className="media" onSubmit={this.submit}>
        <div className="media-left media-middle icon-container">
          <button
            type="submit"
            className="glyphicon glyphicon-plus clickable"/>
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

        </div>
      </form>
    </div>
    )
  }

  submit(event) {
    event.preventDefault();
    const campus = {
      name: event.target.name.value
    };
    console.log(this.props);
    this.props.addCampus(campus);
    event.target.name.value = '';
  }
}

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = function(dispatch) {
  return {
    submit(campus){
      dispatch(addCampus(campus))
    }
  }
};

export default connect(mapState, mapDispatch)(AddCampus);
