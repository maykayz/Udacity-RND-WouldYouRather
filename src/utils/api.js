import {
	_getUsers,
	_getQuestions,
	_saveQuestion,
	_saveQuestionAnswer,
  } from './_DATA.js'

	export function getInitialUsers (){
		return _getUsers().then(users => (users))
	}
  export function getInitialData () {
		return Promise.all([
		  _getUsers(),
		  _getQuestions(),
		]).then(([users, questions]) => ({
		  users,
		  questions,
		}))
  }

  export function receiveQuestions(){
	  return _getQuestions().then(res => {
		  console.log(res)
	  })
  }

  export function saveQuestion (info) {
		return _saveQuestion(info)
  }

  export function saveQuestionAnswer (info) {
	return _saveQuestionAnswer(info)
  }
