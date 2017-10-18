import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Navbar from './Navbar';
import { fetchCampuses } from './../reducers/campuses';
import { fetchStudents } from './../reducers/students';

class Routes extends React.Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

    render () {
      return (
      <div>
      <Router >
        <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={AllCampuses} />
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route path="/students/:id" component={SingleStudent} />
            <Route path="/campuses/:id" component={SingleCampus} />
          </Switch>
        </div>
      </Router>
      </div>
)}}


const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());

  }
});

export default connect(mapProps, mapDispatch)(Routes);
