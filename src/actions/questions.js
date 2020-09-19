import { saveQuestion } from '../utils/api';
export const RECEIVE_QUESTIONS  = 'RECEIVE_QUESTIONS'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'
export const ADD_QUESTION  = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER  = 'ADD_QUESTION_ANSWER'
export const REMOVE_QUESTION_ANSWER = 'REMOVE_QUESTION_ANSWER'



export function receiveQuestions(questions){
  return {
   type: RECEIVE_QUESTIONS,
   questions
  }
}

export function addQuestion(question){
  return {
   type: ADD_QUESTION,
   question
  }
}
export function removeQuestion(question){
  return {
   type: REMOVE_QUESTION,
   question
  }
}

export function addQuestionAnswer(qanswer){
  return {
   type : ADD_QUESTION_ANSWER,
   qanswer
  }
}
export function removeQuestionAnswer(qanswer){
  return {
   type : REMOVE_QUESTION_ANSWER,
   qanswer
  }
}

export function handleSaveQuestion(question){
  return (dispatch, getState) => {
     const { authedUser : author } = getState();
     question ={
      ...question,
      author
     }
     return saveQuestion(question).then((question)=>{

         dispatch(addQuestion(question))
     }).catch((e)=>{
       console.warn('There was an error', e);
        dispatch(removeQuestion(question))
     
     })
  }
}