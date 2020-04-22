import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import {setAuthedUser} from '../actions/authedUser'

class LogIn extends Component {
	state = {
		authedUser : ''
	}
	userLogIn = (e) => {
		e.preventDefault()
		const username = this.state.authedUser ? this.state.authedUser : this.props.users[0].id
		localStorage.setItem('authedUser',username)
		const { dispatch } = this.props
    dispatch(setAuthedUser(username))

	}
	render(){
		const {users} = this.props
		return (
			<div className="container py-5">
				<div className="row d-flex flex-row justify-content-center">
					<div className="col-6">
						<div className="card p-5 my-5">
								<h1 className="py-5 text-center">Welcome</h1>
								<Form.Group controlId="exampleForm.ControlSelect1">
						     <Form.Label>Choose User:</Form.Label>
						     <Form.Control as="select" onChange={e => this.setState({authedUser: e.target.value})}>
								 	{
										users.map(user => {
											return (
												<option value={user.id} key={user.id}>{user.id}</option>
											)
										})
									}
						     </Form.Control>
						   </Form.Group>
							 <button className="btn btn-primary mt-5" onClick={e => this.userLogIn(e)}>Log In</button>
						</div>
					</div>
				</div>
			</div>
		  )
	}
}

function mapStateToProps ({ users },props) {
  return {
    users: Object.values(users),
		props
  }
}
export default connect(mapStateToProps)(LogIn)
