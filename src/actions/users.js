export const RECEIVE_USERS  = 'RECEIVE_USERS'
export const REMOVE_USER  = 'REMOVE_USER'
export const ADD_USER  = 'ADD_USER'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const DELETE_AUTHED_USER = 'DELETE_AUTHED_USER'
export const  ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const REMOVE_USER_QUESTION = 'REMOVE_USER_QUESTION'
export const ADD_USER_ANSWER ='ADD_USER_ANSWER'
export const  REMOVE_USER_ANSWER = 'REMOVE_USER_ANSWER'


export function receiveUsers(users){
  return {
   type: RECEIVE_USERS,
   users
  }
}

export function addUser(user){
  return {
   type: ADD_USER,
   user
  }
}
export function removeUser(user){
  return {
   type:  REMOVE_USER,
   user
  }
}
export function removeUserQuestion(user){
  return {
   type:  REMOVE_USER_QUESTION,
   user
  }
}
export function removeUserAnswer(user){
  return {
   type:  REMOVE_USER_ANSWER,
   user
  }
}

export function setAuthedUser(id){
 return {
     type: SET_AUTHED_USER,
     id
 }
}

export function deleteAuthedUser(id){
  return {
    type: DELETE_AUTHED_USER,
    id
  }

}

export function addUserAnswer(qanswer){
  return {
   type : ADD_USER_ANSWER,
   qanswer
  }
}

export function addUserQuestion(user, questionId){
 return {
   type: ADD_USER_QUESTION,
     user,
     questionId
 }

}