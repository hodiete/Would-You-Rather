import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
//page not found object which displays page not found when route does not
//exist
function PageNotFound(props) {
 return (
  <Container>
   <Jumbotron className="notFound__page">
    <h1> Oops, Page not found</h1>
   </Jumbotron>
  </Container>
 );
}

export default PageNotFound;
