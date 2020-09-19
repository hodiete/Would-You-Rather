import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/users";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import  Jumbotron  from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";

class Login extends Component {
 handleSelectedUser = (e) => {
  e.preventDefault();
  const { value: user } = e.target.users;
  //we want to prevent the user from selecting select user option cause there is no user in the db called that
  if (user.toLowerCase() !== "select user") {
   this.props.dispatch(setAuthedUser(user));

  }
 };

 render() {
  return (
   <React.Fragment>
   <Container>
   <Jumbotron className="text__center">
   <div className="login__page">
    <h1>Welcome to Would You Rather App! </h1>   
     <div className="image__login App-logo success">
       WYR
    </div>
    <p> Please sign in to continue</p>
 
    <Form onSubmit={this.handleSelectedUser}>
     <Form.Control as="select" name="users">
      <option value={null}> Select User</option>
      {this.props.users.map((user) => (
       <option key={user.id} value={user.id}>
        {user.name}
       </option>
      ))}
     </Form.Control>
     <Button  variant ="success" size="lg" block className="button button__login"type="submit">Sign in</Button>
    </Form>
       </div>
    </Jumbotron>
    </Container>
   </React.Fragment>
  );
 }
}
//getting the user information  id and name from the users state
function mapStateToProps({ users }) {
 return {
  users: Object.keys(users).map((user) => {
   return {
    id: users[user].id,
    name: users[user].name,
   };
  }),
 };
}

export default connect(mapStateToProps)(Login);
