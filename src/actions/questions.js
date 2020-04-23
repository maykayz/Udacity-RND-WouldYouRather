import {saveQuestion,saveQuestionAnswer} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import {saveAnswerUser} from '../actions/users'


import {RECEIVE_QUESTIONS,ADD_QUESTION,ANSWER_QUESTION} from './types'

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
