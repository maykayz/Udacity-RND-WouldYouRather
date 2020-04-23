import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-bootstrap'

import PollList from './PollList'
import { handleInitialData } from '../actions/shared'

class Home extends Component {
	componentDidMount() {
		 this.props.dispatch(handleInitialData())
  }
	render(){
		const {answeredQuestions,unansweredQuestions,users,authedUser}= this.props
		const userArray = Object.values(users).filter(u => u.id === authedUser)
		const user = userArray.length ? userArray[0] : {}

		return (
			<div className="container py-5">
				<div className="row d-flex flex-row justify-content-center">
					<div className="col-8">
						<div className="card p-3">
						<Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example" className="mx-auto d-flex flex-row justify-content-center">
						  <Tab eventKey="unanswered" title="Unanswered">
						    <PollList questions={unansweredQuestions} authedUser={user} users={users} answered={'unanswered'} key={unansweredQuestions}/>
						  </Tab>
						  <Tab eventKey="answered" title="Answered">
						    <PollList questions={answeredQuestions} authedUser={user} users={users} answered={'answered'} key={answeredQuestions}/>
						  </Tab>
						</Tabs>
						</div>
					</div>
				</div>
			</div>
		  )
	}
}

function mapStateToProps ({ questions,users,authedUser },props) {
	const userAnswers = Object.keys(users[authedUser].answers);
  const unansweredQuestions = Object.values(questions).filter(question => !userAnswers.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp);
  const answeredQuestions = Object.values(questions).filter(question => userAnswers.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp);
  return {
    answeredQuestions,
		unansweredQuestions,
    users,
		user: authedUser
  }
}
export default connect(mapStateToProps)(Home)
