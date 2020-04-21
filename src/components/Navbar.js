import React, {Component} from 'react'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

class Navbar extends Component  {

  render(){
    const {user} = this.props
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
        <Nav className="pr-5" defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <NavLink to='/user' exact className="px-4">
                  {user.name}
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink to='/logout' exact className="px-4">
                  Logout
                </NavLink>
            </Nav.Item>
        </Nav>
      </div>
    )
  }
}

export default Navbar
