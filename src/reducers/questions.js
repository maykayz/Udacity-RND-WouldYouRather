import {RECEIVE_QUESTIONS,ADD_QUESTION,ANSWER_QUESTION } from '../actions/types'

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
