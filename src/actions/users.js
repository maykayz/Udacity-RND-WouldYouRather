export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_ANSWER_USER = 'SAVE_ANSWER_USER'

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
