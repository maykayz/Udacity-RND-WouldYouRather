import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  Link,
} from "react-router-dom";

class PollItem extends Component {
    state = {
    }
    render() {
      const {question,user,answered} = this.props
      const path1 = '/questions/answer/'+question.id
      const path2 = '/questions/'+question.id
        return (
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
                            <p>{question.optionOne.text.substring(0,10)}...</p>
                            {
                              answered === 'unanswered'
                              ? <Link className="btn btn-primary" to={path1}>Submit</Link>
                              : <Link className="btn btn-primary" to={path2}>View Answer</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps ({ authedUser,questions },props) {
  return {
		authedUser,
    questions
  }
}
export default connect(mapStateToProps)(PollItem)
