import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Login from "./Login";
import { Route, Switch } from "react-router";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import NavBar from "./NavBar";
import QuestionPoll from "./QuestionPoll";
import QuestionPollList from "./QuestionPollList";
import PageNotFound from "./PageNotFound";
import Container from "react-bootstrap/Container";

class App extends Component {
 componentDidMount() {
  this.props.dispatch(handleInitialData());
 }

 render() {
  const { authedUser, users, dispatch } = this.props;
  return (
   //building routes, the navbar to show everywhere so not in the switch statement
   //if not logged in then go to the login page, if logged in then display the appropriate component depending
   //on the route
   <Container fluid="md">
    <NavBar user={authedUser} dispatch={dispatch} users={users} />
    <Switch>
     <Route exact path="/" component={authedUser ? QuestionPollList : Login} />
     <Route
      exact
      path="/add"
      render={({ history }) =>
       authedUser ? (
        <NewQuestion dispatch={dispatch} history={history} />
       ) : (
        <Login dispatch={dispatch} history={history} />
       )
      }
     />
     <Route
      exact
      path="/leaderboard"
      component={authedUser ? LeaderBoard : Login}
     />
     <Route
      path="/questions/:question_id"
      component={authedUser ? QuestionPoll : Login}
     />
     <Route path="*" component={!authedUser ? Login : PageNotFound} />
    </Switch>
   </Container>
  );
 }
}
//getting the user information that is logged in
function mapStateToProps({ users, authedUser }) {
 return {
  authedUser: users[authedUser],
 };
}
export default connect(mapStateToProps)(App);
