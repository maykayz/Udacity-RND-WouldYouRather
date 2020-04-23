import React, {Component,Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'
import LogIn from './LogIn'
import Home from './Home'
import NewPoll from './NewPoll'
import ViewPoll from './ViewPoll'
import PollAnswer from './PollAnswer'
import LeaderBoard from './LeaderBoard'
import Navbar from './Navbar'
import NotFound from './NotFound'

import './App.css';

class App extends Component{
  componentDidMount() {
     this.props.handleInitialData();
  }
    render(){
      const {authedUser} = this.props
        return (
          <Router>
            <div className="App">
              {authedUser === null ? (
                  <Route
                    render={() => (
                        <LogIn />
                    )}
                  />
              ) : (
                <Fragment>
                    <Navbar></Navbar>
                    <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/questions/answer/:id' exact component={ViewPoll} />
                    <Route path='/questions/bad_id' exact component={NotFound} />
                    <Route path='/questions/:id' exact component={PollAnswer} />
                    <Route path='/add' exact component={NewPoll} />
                    <Route path='/leaderboard' exact component={LeaderBoard} />
                    <Route component={NotFound} />
                    </Switch>
                </Fragment>
              )}

            </div>
          </Router>
        );
    }
}


function mapStateToProps ({users,authedUser},props) {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps,{handleInitialData})(App)
