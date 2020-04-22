import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import {handleAddQuestion} from '../actions/questions'

class NewPoll extends Component {
	state = {
		optionOneText: '',
		optionTwoText: '',
	}

	saveQuestion = (e) => {
		e.preventDefault()
		const { dispatch } = this.props
    dispatch(handleAddQuestion(this.state.optionOneText,this.state.optionTwoText))
		.then(() => {
			this.props.history.push("/");
		})

	}

	render(){
		return (
			<div className="container py-5">
        <div className="row d-flex flex-row justify-content-center">
					<div className="col-8">
					<div className="card p-5">
	          <h6 className="text-center">Would You Rather?</h6>
							<Form>
										<Form.Group controlId="optionOne" className="py-2">
											<Form.Label>Option One</Form.Label>
											<Form.Control type="text" placeholder="Type Option One" value={this.state.optionOneText} onChange={(e) => this.setState({optionOneText: e.target.value})}/>
										</Form.Group>

										<Form.Group controlId="optionTwo" className="py-2">
											<Form.Label>Option Two</Form.Label>
											<Form.Control type="text" placeholder="Type Option One" value={this.state.optionTwoText} onChange={(e) => this.setState({optionTwoText: e.target.value})}/>
										</Form.Group>

										<Button variant="primary" type="submit" onClick={e => this.saveQuestion(e)}>
											Save Question
										</Button>
							</Form>
		        </div>
					</div>
				</div>
			</div>
		  )
	}
}

function mapStateToProps ({ authedUser }) {
  return {
		author: authedUser
  }
}
export default connect(mapStateToProps)(NewPoll)
