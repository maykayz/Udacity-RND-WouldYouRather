import React, {Component} from 'react'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class Navbar extends Component  {
  logout = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }

  render(){
    var {authedUser} = this.props
    if(authedUser){
      return (
        <div className="d-flex py-3 flex-row justify-content-between bg-yellow navbar align-items-center position-relative">
          <Nav className="pl-5" defaultActiveKey="/" as="ul">
              <Nav.Item as="li">
                  <NavLink to='/' exact className="px-4">
                    Home
                  </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                  <NavLink to='/add' exact className="px-4">
                    New Poll
                  </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                  <NavLink to='/leaderboard' exact className="px-4">
                    Leaderboard
                  </NavLink>
              </Nav.Item>
          </Nav>
          <h5 className="text-center position-absolute mx-auto logo">Would You Rather ... ?</h5>
          <Nav className="pr-5" as="ul">
              <Nav.Item as="li">
                  <NavLink to='/' exact className="px-4">
                    Welcome, {authedUser}
                  </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                  <button className="btn-link px-4" onClick={e => this.logout(e)}>
                    Logout
                  </button>
              </Nav.Item>
          </Nav>
        </div>
      )
    }
  }
}

function mapStateToProps ({authedUser,users}) {
  const user = Object.values(users).filter(u => u.id === authedUser)
  return {
    authedUser : user[0].name
  }
}

export default connect(mapStateToProps)(Navbar)
