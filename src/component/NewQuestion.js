import React, { Component } from "react";
import { handleSaveQuestionUser } from "../actions/shared";
import Button from "react-bootstrap/Button";
import { Container, Card, Form, Jumbotron } from "react-bootstrap";

class NewQuestion extends Component {
 state = {
  optionOne: "",
  optionTwo: "",
 };

 isDisabled = () => {
  const { optionOne, optionTwo } = this.state;
  return optionOne === "" || optionTwo === "";
 };
 handleNewQuestion = (e) => {
  e.preventDefault();
  const { optionOne, optionTwo } = this.state;
  const { dispatch, history } = this.props;
  //constructing the question object
  const question = {
   optionOneText: optionOne,
   optionTwoText: optionTwo,
  };
  //saving the authedUser question and then redirecting to homepage
  dispatch(handleSaveQuestionUser(question));
  history.push("/");
 };
 handleInputChange = (e) => {
  this.setState({
   [e.target.name]: e.target.value,
  });
 };
 render() {
  const { optionOne, optionTwo } = this.state;
  return (
   <Container>
    <Card>
     <Jumbotron>
      <div className="newQuestion__header">
       <h1>Create New Question</h1>
      </div>
     </Jumbotron>

     <Form onSubmit={this.handleNewQuestion} className="question__form mb-3">
      <h2> Complete the question: </h2>
      <h3>Would you rather ...</h3>
      <Form.Control
       type="text"
       placeholder="Enter Option One Text Here"
       name="optionOne"
       value={optionOne}
       onChange={this.handleInputChange}
      />
      <div className="mb-3">OR</div>
      <Form.Control
       type="text"
       placeholder="Enter Option Two Text Here"
       name="optionTwo"
       value={optionTwo}
       onChange={this.handleInputChange}
      />
      <Button
       type="submit"
       variant="success"
       size="lg"
       block
       disabled={this.isDisabled()}>
       Submit
      </Button>
     </Form>
    </Card>
   </Container>
  );
 }
}

export default NewQuestion;
