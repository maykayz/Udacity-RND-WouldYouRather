import {RECEIVE_USERS,SAVE_ANSWER_USER} from './types'

  export function receiveUsers(users) {
	  return {
		  type : RECEIVE_USERS,
		  users
	  }
  }

  export function saveAnswerUser (qid,authedUser,answer){
    return {
      type : SAVE_ANSWER_USER,
      qid,
      authedUser,
      answer
    }
  }
