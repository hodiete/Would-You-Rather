import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/users";
import {
 Container,
 Row,
 Col,
 Button,
 Navbar as Navigation,
 Nav,
} from "react-bootstrap";
class NavBar extends Component {
 handleLogout = (e) => {
  e.preventDefault();
  //setting the user to null once logged out then redirecting to homepage
  this.props.dispatch(setAuthedUser(null));
  return this.props.history.push("/");
 };
 render() {
  const { user } = this.props;
  return (
   <Container>
    <Row>
     <Col>
      <Navigation bg="dark">
       <Nav className="mr-auto  nav nav__left">
        <Link to="/">Home</Link>
        <Link to="/add">New Question</Link>
        <Link to="/leaderboard">Leader Board</Link>
       </Nav>
       <Nav className=" nav nav__right">
        {user && (
         <React.Fragment>
          <div className="user__name"> Hello {user.name}</div>
          <img
           className="user__picture"
           src={`%PUBLIC_URL%${user.avatarURL}`}
           alt={`${user.name}'s avatar`}
           width={80}
           height={80}
          />
          <Button variant="danger" onClick={this.handleLogout}>
           Logout
          </Button>
         </React.Fragment>
        )}
       </Nav>
      </Navigation>
     </Col>
    </Row>
   </Container>
  );
 }
}

export default withRouter(NavBar);
