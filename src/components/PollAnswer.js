import React, {Component} from 'react'
import {ProgressBar} from 'react-bootstrap'
import { connect } from 'react-redux'


class PollAnswer extends Component {
    state = {
    }
    render() {
        const {user,question,authedUser} = this.props
        const optionOneVote = question.optionOne ? question.optionOne.votes.length : 0
        const optionTwoVote = question.optionTwo ? question.optionTwo.votes.length : 0
        const totalVote = optionOneVote + optionTwoVote
        const optionOnePercentage = optionOneVote/totalVote*100
        const optionTwoPercentage = optionTwoVote/totalVote*100
        return (
            <div className="container my-5">
                <div className="row d-flex flex-row justify-content-center">
                    <div className="col-8">
                        <div className="card p-3">
                        <div className="py-5 mx-5">
                            <div className="card my-4 poll-item" key={question.id}>
                                <h6 className="card-header">{question.author}
                                    asks:</h6>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-3 text-center">
                                            <img className="user-image" src={user ? user.avatarURL : ''} alt="user"/>
                                        </div>
                                        <div className="col-9">
                                            <h6>Results</h6>
                                            <div className="card vote-card p-2 m-3">
                                            {
                                              question.optionOne.votes.includes(authedUser)
                                              ? <span className="yourvote-item">Your Vote</span>
                                              : ''
                                            }

                                                <h6>{question.optionOne.text}</h6>
                                                <ProgressBar variant={optionOnePercentage >= optionTwoPercentage ? 'success' : 'info'} now={optionOnePercentage} />
                                                <p>{optionOneVote} out of {totalVote}</p>
                                            </div>
                                            <div className="card vote-card p-2 m-3">
                                            {
                                              question.optionTwo.votes.includes(authedUser)
                                              ? <span className="yourvote-item">Your Vote</span>
                                              : ''
                                            }
                                                <h6>{question.optionTwo.text}</h6>
                                                <ProgressBar variant={optionOnePercentage <= optionTwoPercentage ? 'success' : 'info'} now={optionTwoPercentage} />
                                                <p>{optionTwoVote} out of {totalVote}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
function mapStateToProps ({ authedUser,questions,users },props) {
    const id = props.match.params.id

    const question = Object.values(questions).filter(q => q.id === id)[0]
    const user = Object.values(users).filter(u => u.id === question.author)[0]
    return {
  		user,
      question,
      authedUser
    }
}
export default connect(mapStateToProps)(PollAnswer)
