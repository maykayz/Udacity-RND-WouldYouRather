import {saveQuestion,saveQuestionAnswer} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import {saveAnswerUser} from '../actions/users'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'



  export function receiveQuestions (questions) {
	  return {
		  type : RECEIVE_QUESTIONS,
		  questions
	  }
  }
  function addQuestion (question){
    return {
      type : ADD_QUESTION,
      qid: question.id,
      question
    }
  }

  export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
      dispatch(showLoading())
      return saveQuestion({
        optionOneText,
        optionTwoText,
        author: authedUser,
      })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => {
          dispatch(hideLoading())
        })
    }
  }

  function answerQuestion (qid,authedUser, answer){
    return {
      type : ANSWER_QUESTION,
      qid,
      authedUser,
      answer
    }
  }
  export function handleAnswerQuestion (qid,authedUser,answer){
    // dispatch(handleInitialData()
    return (dispatch, getState) => {
      dispatch(answerQuestion(qid,authedUser,answer))
      dispatch(saveAnswerUser(qid,authedUser,answer))
      return saveQuestionAnswer({
        authedUser,
        qid,
        answer,
      })
    }
  }
