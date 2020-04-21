import React, {Component} from 'react'
import { connect } from 'react-redux'

import PollItem from './PollItem'

class PollComponent extends Component {

	render(){
    const questions = Object.values(this.props.questions).sort((a,b)=> b.timestamp > a.timestamp)
    const users = Object.values(this.props.users)
		return (
				<div className="py-5 mx-5">
            {
                questions.map(question => (
                  <PollItem question={question} user={users.filter((u) => u.id === question.author)[0]} key={question.id} />
                ))
            }
				</div>
		  )
	}
}

function mapStateToProps ({ questions,users,authedUser }) {
  return {
    questions,
    users,
		authedUser
  }
}
export default connect(mapStateToProps)(PollComponent)
