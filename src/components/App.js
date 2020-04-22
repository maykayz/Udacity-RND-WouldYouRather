import React, {Component,Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'
import LogIn from './LogIn'
import Home from './Home'
import NewPoll from './NewPoll'
import ViewPoll from './ViewPoll'
import PollAnswer from './PollAnswer'
import LeaderBoard from './LeaderBoard'
import Navbar from './Navbar'

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
                  <Navbar authedUser={authedUser}></Navbar>
                    <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/poll/:id' exact component={ViewPoll} />
                    <Route path='/poll/answer/:id' exact component={PollAnswer} />
                    <Route path='/newpoll' component={NewPoll} />
                    <Route path='/leaderboard' component={LeaderBoard} />
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
