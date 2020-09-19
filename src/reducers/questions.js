import { RECEIVE_QUESTIONS, ADD_QUESTION, REMOVE_QUESTION, REMOVE_QUESTION_ANSWER, ADD_QUESTION_ANSWER } from "../actions/questions";


export default function questions (state={}, action){
  switch (action.type){
  case RECEIVE_QUESTIONS :
  return {
    ...state,
    ...action.questions
  }
  
  case ADD_QUESTION :
  return  {
   ...state,
   [action.question.id]:  {
      ...state[action.question.id],
      ...action.question
   }
  }

  case REMOVE_QUESTION :
  return delete state[action.question.id]

  case ADD_QUESTION_ANSWER :
  console.log(action)
  return {
   ...state, 
   [action.qanswer.qid] : {
     ...state[action.qanswer.qid],
     [action.qanswer.answer]: {
       ...state[action.qanswer.qid][action.qanswer.answer],
       votes: state[action.qanswer.qid][action.qanswer.answer].votes.concat([action.qanswer.authedUser])
     }
   }
  }
  
  case REMOVE_QUESTION_ANSWER :

  return {
     ...state, 
   [action.qanswer.qid] : {
     ...state[action.qanswer.qid],
     [action.qanswer.answer]: {
       ...state[action.qanswer.qid][action.qanswer.answer],
       votes: state[action.qanswer.qid][action.qanswer.answer].votes.filter(user => user !== action.qanswer.authedUser)
     }
   }
 
  
  }

  default :
  return state
 
  }
  


}