import {RECEIVE_QUESTIONS,ADD_QUESTION,ANSWER_QUESTION,SAVE_ANSWER_USER } from '../actions/questions'

export default function questions (state = {}, action){
	switch(action.type) {
		case RECEIVE_QUESTIONS: {
			return {
				...state,
				...action.questions
			}
		}
		case ADD_QUESTION: {
			const {qid,question} = action;
			return {
				...state,
				[qid]: question
			}
		}
		case ANSWER_QUESTION: {
			const {qid,authedUser,answer} = action;
			console.log(state)
			 return {
				 ...state,
				 [qid]: {
					 ...state[qid],
					 [answer]:{
						 ...state[qid][answer],
						 votes: state[qid][answer].votes.concat(authedUser)
					 }
				 }
			 }
		}
		default: {
			return {
				...state
			}
		}
	}
}
