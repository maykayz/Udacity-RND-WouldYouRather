import React, {Component} from 'react'

import PollItem from './PollItem'

class PollList extends Component {

	render(){
    const {questions,authedUser,answered} = this.props
    const users = Object.values(this.props.users)
		return (
				<div className="py-5 mx-5">
            {
                questions.map((question,index) => (
                  <PollItem question={question} authedUser={authedUser} answered={answered} user={users.filter((u) => u.id === question.author)[0]} key={index}/>
                ))
            }
				</div>
		  )
	}
}

export default PollList
