import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import Home from './Home'
import NewPoll from './NewPoll'
import ViewPoll from './ViewPoll'
import PollAnswer from './PollAnswer'
import LeaderBoard from './LeaderBoard'
import Navbar from './Navbar'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import './App.css';



class App extends Component{
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }
    render(){
      const {users,authedUser} = this.props
      const userArray = Object.values(users).filter(u => u.id === authedUser)
      const user = userArray.length ? userArray[0] : {}
        return (
          <Router>
              <LoadingBar />
              <div>
              <Navbar user={user}></Navbar>
                {this.props.loading === true
                  ? null
                  : <div>
                      <Route path='/' exact component={Home} />
                      <Route path='/poll/:id' exact component={ViewPoll} />
                      <Route path='/poll/answer/:id' exact component={PollAnswer} />
                      <Route path='/newpoll' component={NewPoll} />
                      <Route path='/leaderboard' component={LeaderBoard} />
                    </div>}
                  }
              </div>
          </Router>
        );
    }
}


function mapStateToProps ({ authedUser,questions,users },props) {
  return {
    loading: authedUser === null,
    questions,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(App)
