import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Jumbotron } from "react-bootstrap";

class LeaderBoard extends Component {
 render() {
  const { users } = this.props;
  return (
   <Container>
    <div className="leaderboard__header">
     <h1> Leaderboard </h1>
    </div>
    <ul>
     <div className="question__card">
      <div className="question__author leaderboard card">
       {users
        .sort((a, b) => b.total - a.total)
        .map((user, i) => {
         return (
          <li key={user.id}>
           <Jumbotron>
            <h3>
             {" "}
             #{i + 1}: {user.name}
            </h3>
           </Jumbotron>
           <div className="author__information">
            <div className="author__picture">
             <img
              src={user.avatar}
              alt={`Avatar for ${user.name}`}
              width={250}
              height={250}
             />
            </div>
            <div className="author__text">
             <div> Score : {user.total}</div>
             <div> Answered Questions : {user.answeredQuestions}</div>
             <div> Created Question : {user.createdQuestions}</div>
            </div>
           </div>
          </li>
         );
        })}
      </div>
     </div>
    </ul>
   </Container>
  );
 }
}
//constructing a users prop that contains the id, name, avatar, number of answered and unanswered
//questions and a total for easier display
function mapStateToProps({ users }) {
 return {
  users: Object.keys(users).map((user) => {
   const total =
    Object.keys(users[user].answers).length + users[user].questions.length;
   return {
    id: users[user].id,
    name: users[user].name,
    avatar: users[user].avatarURL,
    answeredQuestions: Object.keys(users[user].answers).length,
    createdQuestions: users[user].questions.length,
    total,
   };
  }),
 };
}
export default connect(mapStateToProps)(LeaderBoard);
