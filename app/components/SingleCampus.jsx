import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCampus } from '../reducers/campuses';
import { updateStudent } from '../reducers/students'
import EditCampus from './EditCampus';

class SingleCampus extends React.Component {
  constructor () {
    super();
    this.state = {
      campus: {},
      students: []
    };
    this.switchView = this.switchView.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount () {
    const campusId = this.props.match.params.id;
    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        campus
      }));
  }

  render() {
    const campus = this.state.campus;
    const students = this.props.students.filter(function(student) {return student.campusId === campus.id})
    return (
      <div>
        {this.state.displayEdit
         ? <EditCampus
            id={this.state.campus.id}
            update={this.update}
            updateCampus={this.props.updateCampus}
            updateStudent = {this.props.updateStudent}
            switchView={this.switchView}
            name={this.state.campus.name} />
         :  <button onClick={this.switchView}>Edit this information</button>
          }
        <h3>{campus.name}</h3>
        <h2>{campus.imageURL}</h2>
        <ol>
          {(students.length === 0) ? 'No Students Assigned' : <div /> }
          {students.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase()).map(student => { return (
            <li key={student.id}>
              <Link key ={student.id} to={`/students/${student.id}`}>
                Name: {student.name}
              </Link>
              Email: {student.email}
            </li>
          )}
          )}
        </ol>
      </div>
    )
  }
  switchView(){
    this.setState({displayEdit: !this.state.displayEdit})
  }

  update(campus){
    this.setState({campus})
  }
}

const mapState = ({ students }) => ({ students});
const mapDispatch = { updateCampus, updateStudent };

export default connect(mapState, mapDispatch)(SingleCampus);
