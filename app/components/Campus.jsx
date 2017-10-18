import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeCampus } from '../reducers/campuses'

class Campus extends React.Component {

  constructor(props){
    super(props);
    this.removeCampusCallback = this.removeCampusCallback.bind(this);
  }

  render(){
    const { campus } = this.props;
    return (
      <div key={campus.id}>
        <NavLink to={`/campuses/${campus.id}`}>
        <li> Name: {campus.name}</li>
        </NavLink>
        <button className="btn btn-default" onClick={this.removeCampusCallback}>X
        </button>
      </div>
    )
  }

  removeCampusCallback(event){
    event.stopPropagation();
    const id = this.props.campus.id;
    this.props.onClick(id);
  }
}

const mapState = ({ campuses }) => ({ campuses})
const mapDispatchToProps = function(dispatch){
  return {
    onClick(id){
      dispatch(removeCampus(id))
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Campus);
