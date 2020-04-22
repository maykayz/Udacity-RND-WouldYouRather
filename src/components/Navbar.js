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
    const user = this.props.authedUser
    console.log(user)
    return (
      <div className="d-flex py-3 flex-row justify-content-between bg-yellow navbar align-items-center position-relative">
        <Nav className="pl-5" defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
                <NavLink to='/' exact className="px-4">
                  Home
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink to='/newpoll' exact className="px-4">
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
                  {user.name}
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <a href="#" onClick={e => this.logout(e)} className="px-4">
                  Logout
                </a>
            </Nav.Item>
        </Nav>
      </div>
    )
  }
}

function mapStateToProps () {
  // console.log(props)
  return {
    // user: props.authedUser
  }
}

export default connect(mapStateToProps)(Navbar)
