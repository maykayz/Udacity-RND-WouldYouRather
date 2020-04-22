import React, {Component} from 'react'
import {Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import {handleAnswerQuestion} from '../actions/questions'


class ViewPoll extends Component {
    state = {
        selectedOption: '',
        disabled: false
    }
   submitAnswer = (e) => {
     e.preventDefault()
     const {dispatch,question,authedUser} = this.props
     const qid = question.id
     dispatch(handleAnswerQuestion(qid,authedUser,this.state.selectedOption))
     this.props.history.push("/poll/answer/"+qid);
   }
    render() {
        const {user,question} = this.props
        return (
            <div className="container">
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
                                            <h6>Would You Rather...?</h6>
                                            <Form className="py-3">
                                                <div key="state.selectedOption" className="mb-3">
                                                    <Form.Check
                                                        type="radio"
                                                        id={'groupOptions'+question.id+"1"}
                                                        name={'groupOptions'+question.id}
                                                        className="my-2"
                                                        label={question.optionOne ? question.optionOne.text : ''}
                                                        checked={this.state.selectedOption === 'optionOne'}
                                                        disabled={this.state.disabled}
                                                        onChange={e => {
                                                          this.setState({selectedOption: "optionOne"})
                                                        }}/>
                                                    <Form.Check
                                                        type="radio"
                                                        id={'groupOptions'+question.id+2}
                                                        name={'groupOptions'+question.id}
                                                        className="my-2"
                                                        disabled={this.state.disabled}
                                                        label={question.optionTwo ? question.optionTwo.text : ''}
                                                        checked={this.state.selectedOption === 'optionTwo'}
                                                        onChange={e => {
                                                        this.setState({selectedOption: "optionTwo"})
                                                    }}/>
                                                </div>
                                            </Form>
                                            {
                                              (!this.state.disabled &&
                                                <button className="btn btn-primary" onClick={e => this.submitAnswer(e)}>Submit</button>
                                              )
                                            }
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
export default connect(mapStateToProps)(ViewPoll)
