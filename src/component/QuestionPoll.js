import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionUserAnswer } from '../actions/shared';
import { Container, Form, Button, Jumbotron } from 'react-bootstrap';
import PageNotFound from './PageNotFound';



class QuestionPoll extends Component {

handleOptionResult=(e)=>{
e.preventDefault();
 const { value } = e.target.options;
 const { dispatch, question } = this.props;
  const  questionAnswer = {
     qid: question.id, 
     answer: value
   }
   // saves the user's answer to the store
   dispatch(handleSaveQuestionUserAnswer(questionAnswer))

   
}
handlePercentageVote(option, total) {
   return  `${Math.floor(option*100/total)}%`
}
 render() { 
  const {question, userVote, totalVotes, optionOneVotes, optionTwoVotes, author}  = this.props;
  return ( 
  <Container >
  {!question ? (<PageNotFound/>):(
<div >
 <h1>Would You Rather </h1>

  <Form onSubmit={this.handleOptionResult} className="card">
      <div key={question.id}> 
          <Jumbotron>
          { !userVote ?
           ( <h2>  {author.name} asks: </h2>) : (<h2> Asked by {author.name}</h2> )
            }
          </Jumbotron>
           <div className="question__card">
     <div className="question__author">
            <img src={`${author.picture}`} alt="Author" width={250} height={250}/>
        </div>

     <div className="question__text">
                   {!userVote ?
  (<React.Fragment>
            <div>
            
          <Form.Check type='radio' id='optionOne' value='optionOne' name="options" defaultChecked
                   label={question.optionOne.text}/>
            </div>
            <div> OR </div>
              <div>
            <Form.Check type='radio' id='optionTwo' value='optionTwo' name="options" 
            label={question.optionTwo.text}/> 
            </div> 
            <Button variant="success" type="submit">Submit</Button>    
          </React.Fragment>
          ):(
      
            <React.Fragment>
              <div className={`votes ${userVote==='optionOne' && 'voted__for'}`}>
           <div>{userVote==='optionOne' && 'You voted for :'} {question.optionOne.text} </div> 
            <div className="percentage">
            <div className="percentage__vote" style = {{ width: `${this.handlePercentageVote(optionOneVotes, totalVotes)}`}}>
             <div> {this.handlePercentageVote(optionOneVotes, totalVotes)} </div>
            </div>
         </div>
           <div>{ optionOneVotes } of {totalVotes} votes</div>
           
                 
            </div>
             <div className={`votes ${userVote==='optionTwo' && 'voted__for'}`}>
           <div> {userVote==='optionTwo' && 'You voted for :'} {question.optionTwo.text} </div> 
           <div className="percentage">
                       <div className="percentage__vote" style = {{ width: `${this.handlePercentageVote(optionTwoVotes, totalVotes)}`}}>
             <div> {this.handlePercentageVote(optionTwoVotes, totalVotes)} </div>
            </div>
                 
            </div>
       <div>{ optionTwoVotes } of {totalVotes} votes</div>
       </div>
            </React.Fragment>)
            }
          
         </div>
          </div>
    </div>
 </Form>
 
</div>

   )}
   </Container>
  )
 }
}
 
//building a prop based on the id from the url from the route and getting question information
// such as the question , number of votes of each option and the user informaiton on who asked the question
  function mapStateToProps({ questions, users, authedUser }, { match }){
    const questionId = match.params.question_id;
    const optionOneVotes= questions[questionId] ? Object.keys(questions[questionId].optionOne.votes).length : 0;
    const optionTwoVotes = questions[questionId] ? Object.keys(questions[questionId].optionTwo.votes).length : 0;
    const totalVotes =  questions[questionId] ? Object.keys(questions[questionId].optionOne.votes).length +
    Object.keys(questions[questionId].optionTwo.votes).length : 0;
      return {
       question : questions[questionId], 
       userVote: users[authedUser].answers[questionId],
       totalVotes,
       optionOneVotes,
       optionTwoVotes,
       author:{
       picture: questions[questionId] ?users[questions[questionId].author].avatarURL: null,
       name: questions[questionId] ? users[questions[questionId].author].name : null
       },
       users
      }
  }
export default connect(mapStateToProps)(QuestionPoll);