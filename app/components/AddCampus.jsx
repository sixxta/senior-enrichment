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
      <div>
      <form className="media" onSubmit={this.submit}>
        <div>
          <button type="submit">
          Add a campus
          </button>
        </div>
        <div>
          <h4 >
            <input
              name="name"
              type="text"
              placeholder="name"
              required
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
    this.props.submit(campus);
    // console.log(this.props);
    // this.props.addCampus(campus);
    // event.target.name.value = '';
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
