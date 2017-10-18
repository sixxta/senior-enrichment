import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SingleCampus extends React.Component {
  constructor () {
    super();
    this.state = {
      campus: {},
      students: []
    };
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
    const students = this.props.students.filter(
         function(student) {return student.campusId === campus.id})
    return (
      <div>
        <h3>{campus.name}</h3>
        <h2>{campus.imageURL}</h2>
        <ol>
          {students.map(student => { return (
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
}

const mapState = ({ students }) => ({ students});
const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleCampus);
