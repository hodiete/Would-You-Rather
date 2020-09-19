import {
 receiveUsers,
 addUserQuestion,
 addUserAnswer,
 removeUserAnswer,
} from "./users";
import {
 receiveQuestions,
 addQuestion,
 removeQuestion,
 addQuestionAnswer,
 removeQuestionAnswer,
} from "./questions";

import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";

export function handleInitialData() {
 return (dispatch) => {
  return getInitialData().then(({ users, questions }) => {
   dispatch(receiveUsers(users));
   dispatch(receiveQuestions(questions));
  });
 };
}

export function handleSaveQuestionUser(question) {
 return (dispatch, getState) => {
  const { authedUser: author } = getState();
  question = {
   ...question,
   author,
  };

  return saveQuestion(question)
   .then((question) => {
    dispatch(addQuestion(question));
    dispatch(addUserQuestion(author, question.id));
   })
   .catch((e) => {
    console.warn("There was an error", e);
    dispatch(removeQuestion(question));
   });
 };
}

export function handleSaveQuestionUserAnswer(questionAnswer) {
 return (dispatch, getState) => {
  const { authedUser } = getState();
  console.log(questionAnswer);
  questionAnswer = {
   ...questionAnswer,
   authedUser,
  };
  dispatch(addQuestionAnswer(questionAnswer));
  dispatch(addUserAnswer(questionAnswer));
  return saveQuestionAnswer(questionAnswer).catch((e) => {
   console.warn("There was an error", e);
   dispatch(removeQuestionAnswer(questionAnswer));
   dispatch(removeUserAnswer(questionAnswer));
  });
 };
}
