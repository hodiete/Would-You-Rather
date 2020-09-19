import {
 RECEIVE_USERS,
 ADD_USER,
 ADD_USER_QUESTION,
 REMOVE_USER,
 REMOVE_USER_QUESTION,
 ADD_USER_ANSWER,
 REMOVE_USER_ANSWER,
} from "../actions/users";

//reducer for users state management

export default function users(state = {}, action) {
 switch (action.type) {
  case RECEIVE_USERS:
   return {
    ...state,
    ...action.users,
   };

  case ADD_USER:
   return state.concat([action.user]);

  case ADD_USER_QUESTION:
   return {
    ...state,
    [action.user]: {
     ...state[action.user],
     questions: state[action.user].questions.concat([action.questionId]),
    },
   };

  case ADD_USER_ANSWER:
   return {
    ...state,
    [action.qanswer.authedUser]: {
     ...state[action.qanswer.authedUser],
     answers: {
      ...state[action.qanswer.authedUser].answers,
      [action.qanswer.qid]: action.qanswer.answer,
     },
    },
   };

  case REMOVE_USER:
   return state.filter((user) => user !== action.user);

  case REMOVE_USER_QUESTION:
   return {
    ...state,
    [action.user]: {
     ...state[action.user],
     questions: state[action.user].questions.filter(
      (questionId) => questionId !== action.questionId
     ),
    },
   };
  case REMOVE_USER_ANSWER:
   return delete state[action.qanswer.authedUser].answers[action.qanswer.qid];

  default:
   return state;
 }
}
