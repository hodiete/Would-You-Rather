import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Jumbotron } from "react-bootstrap";

class QuestionPollList extends Component {
 state = {
  isAnswered: false,
 };
 //sorting question based on the time they were created, with the lastest time shown first
 handleSortedQuestions = (question) =>
  question.sort((a, b) => b.timestamp - a.timestamp);
 handleClick = (e) => {
  e.preventDefault();
  const { name } = e.target;
  //we want to check if a question has been answered or not and then update the state
  name === "answered"
   ? this.setState({ isAnswered: true })
   : this.setState({ isAnswered: false });
 };
// building the question html depending on parameters passed
 buildQuestion = (aFunc) =>
  aFunc.map((question) => {
   const author = this.props.authors.filter(
    (author) => author.id === question.author
   );

   return (
    <div key={question.id} className="card">
   <Jumbotron>
     {this.state.isAnswered ? (
      <h2> Asked by {author[0].name} </h2>
     ) : (
      <h2> {author[0].name} asks: </h2>
     )}
     </Jumbotron>
     <div className="question__card">
     <div className="question__author">
     <img
      src={`${author[0].avatarURL}`}
      alt="Author"
      width={250}
      height={250}
     />
     </div>
     <div className="question__text">
     <h3> Would You rather </h3>
     <div> ...{question.optionOne.text}... </div>
     <Link to={`/questions/${question.id}`} className="btn btn-success">View Poll</Link>
    </div>
    </div>
    </div>
   );
  });

 render() {
  const { unAnsweredQuestions, answeredQuestions } = this.props;
  const { isAnswered } = this.state;

  const questionNotAnswered = this.handleSortedQuestions(unAnsweredQuestions);
  const questionAnswered = this.handleSortedQuestions(answeredQuestions);

  return (

   <Container className="dashboard">
    <div>
     <div className="buttons">
     <Button  className={ !isAnswered && "active text__color"}   variant={!isAnswered ? "success" : "secondary"} onClick={this.handleClick} name="notanswered">
      UnAnswered Question
     </Button>
     <Button  className={ isAnswered && "active text__color"} variant={isAnswered ? "success" : "secondary"} onClick={this.handleClick} name="answered">
      Answered Question
     </Button>
     </div>

     {isAnswered
      ? this.buildQuestion(questionAnswered)
      : this.buildQuestion(questionNotAnswered)}
    </div>
   </Container>
  );
 }
}
//props to get the list of questions sorted by answered and unanswered
//getting the author of those questions
function mapStateToProps({ users, authedUser, questions }) {
 const ArrQuestion = Object.keys(questions);
 const answers = Object.keys(users[authedUser].answers);
 const unAnsweredQuestions = ArrQuestion.filter(
  (question) => !answers.includes(question)
 );
 const answeredQuestions = ArrQuestion.filter((question) =>
  answers.includes(question)
 );
 const authors = [
  ...new Set(ArrQuestion.map((question) => users[questions[question].author])),
 ];

 return {
  unAnsweredQuestions: unAnsweredQuestions.map(
   (question) => questions[question]
  ),
  answeredQuestions: answeredQuestions.map((question) => questions[question]),
  authors,
 };
}
export default connect(mapStateToProps)(QuestionPollList);
