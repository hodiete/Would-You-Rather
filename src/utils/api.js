import {
 _saveQuestionAnswer,
 _saveQuestion,
 _getUsers,
 _getQuestions,
} from "./_DATA";

export function getInitialData() {
 return Promise.all([_getUsers(), _getQuestions()]).then(
  ([users, questions]) => ({
   users,
   questions,
  })
 );
}

export function saveQuestion(question) {
 return _saveQuestion(question);
}

export function saveQuestionAnswer(object) {
 return _saveQuestionAnswer(object);
}
