import React, {Component} from 'react'
import {Form} from 'react-bootstrap'

class PollComponent extends Component {
    state = {
        selectedOption: ''
    }
    render() {
        const {question, user} = this.props
        return (
            <div className="card my-4 poll-item">
                <h6 className="card-header">{question.author}
                    asks:</h6>
                <div className="card-body">
                    <div className="row">
                        <div className="col-3 text-center">
                            <img className="user-image" src={user.avatarURL} alt="user"/>
                        </div>
                        <div className="col-9">
                            <h6>Would You Rather...?</h6>
                            <Form className="py-3">
                                <div key="selectedOption" className="mb-3">
                                    <Form.Check
                                        type="radio"
                                        id={'groupOptions'+question.id+"1"}
                                        name={'groupOptions'+question.id}
                                        className="my-2"
                                        label={question.optionOne.text}
                                        onChange={e => {
                    											this.setState({selectedOption: 1})
                    										}}/>
                                    <Form.Check
                                        type="radio"
                                        id={'groupOptions'+question.id+2}
                                        name={'groupOptions'+question.id}
                                        className="my-2"
                                        label={question.optionTwo.text}
                                        onChange={e => {
                                        this.setState({selectedOption: 2})
                                    }}/>
                                </div>
                            </Form>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollComponent
