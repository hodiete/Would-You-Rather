(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{58:function(e,t,a){e.exports=a(71)},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),s=a.n(o),c=a(15),i=a(20),u=a(47),l=function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}},m=Object(i.a)(u.a,l),d=a(7),h=a(3),p=a(57),b={hodiete:{id:"hodiete",name:"Henry Odiete",avatarURL:"../../images/snow.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionOne",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},csmith:{id:"csmith",name:"Colin Smith",avatarURL:"../../images/tyler.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},jorielsaikali:{id:"jorielsaikali",name:"Jori El-Saikali",avatarURL:"../../images/leaf.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionOne"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},v={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"hodiete",timestamp:1467166872634,optionOne:{votes:["hodiete"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"jorielsaikali",timestamp:1468479767190,optionOne:{votes:["hodiete"],text:"become a superhero"},optionTwo:{votes:["jorielsaikali"],text:"become a supervillian"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"hodiete",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["hodiete"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"csmith",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["hodiete"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"csmith",timestamp:1489579767190,optionOne:{votes:["csmith"],text:"find $50 yourself"},optionTwo:{votes:["jorielsaikali"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"jorielsaikali",timestamp:1493579767190,optionOne:{votes:["jorielsaikali"],text:"write JavaScript"},optionTwo:{votes:["csmith"],text:"write Swift"}}};function E(e){return new Promise((function(t,a){var n=e.author,r=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout((function(){v=Object(h.a)(Object(h.a)({},v),{},Object(d.a)({},r.id,r)),b=Object(h.a)(Object(h.a)({},b),{},Object(d.a)({},n,Object(h.a)(Object(h.a)({},b[n]),{},{questions:b[n].questions.concat([r.id])}))),t(r)}),1e3)}))}function O(e){return E(e)}function f(e){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise((function(e,r){setTimeout((function(){b=Object(h.a)(Object(h.a)({},b),{},Object(d.a)({},t,Object(h.a)(Object(h.a)({},b[t]),{},{answers:Object(h.a)(Object(h.a)({},b[t].answers),{},Object(d.a)({},a,n))}))),v=Object(h.a)(Object(h.a)({},v),{},Object(d.a)({},a,Object(h.a)(Object(h.a)({},v[a]),{},Object(d.a)({},n,Object(h.a)(Object(h.a)({},v[a][n]),{},{votes:v[a][n].votes.concat([t])}))))),e()}),500)}))}(e)}function j(e){return{type:"ADD_QUESTION",question:e}}function w(e){return{type:"REMOVE_QUESTION",question:e}}function q(e){return{type:"SET_AUTHED_USER",id:e}}var _=Object(i.c)({questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_QUESTIONS":return Object(h.a)(Object(h.a)({},e),t.questions);case"ADD_QUESTION":return Object(h.a)(Object(h.a)({},e),{},Object(d.a)({},t.question.id,Object(h.a)(Object(h.a)({},e[t.question.id]),t.question)));case"REMOVE_QUESTION":return delete e[t.question.id];case"ADD_QUESTION_ANSWER":return Object(h.a)(Object(h.a)({},e),{},Object(d.a)({},t.qanswer.qid,Object(h.a)(Object(h.a)({},e[t.qanswer.qid]),{},Object(d.a)({},t.qanswer.answer,Object(h.a)(Object(h.a)({},e[t.qanswer.qid][t.qanswer.answer]),{},{votes:e[t.qanswer.qid][t.qanswer.answer].votes.concat([t.qanswer.authedUser])})))));case"REMOVE_QUESTION_ANSWER":return Object(h.a)(Object(h.a)({},e),{},Object(d.a)({},t.qanswer.qid,Object(h.a)(Object(h.a)({},e[t.qanswer.qid]),{},Object(d.a)({},t.qanswer.answer,Object(h.a)(Object(h.a)({},e[t.qanswer.qid][t.qanswer.answer]),{},{votes:e[t.qanswer.qid][t.qanswer.answer].votes.filter((function(e){return e!==t.qanswer.authedUser}))})))));default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USERS":return Object(h.a)(Object(h.a)({},e),t.users);case"ADD_USER":return e.concat([t.user]);case"ADD_USER_QUESTION":return Object(h.a)(Object(h.a)({},e),{},Object(d.a)({},t.user,Object(h.a)(Object(h.a)({},e[t.user]),{},{questions:e[t.user].questions.concat([t.questionId])})));case"ADD_USER_ANSWER":return Object(h.a)(Object(h.a)({},e),{},Object(d.a)({},t.qanswer.authedUser,Object(h.a)(Object(h.a)({},e[t.qanswer.authedUser]),{},{answers:Object(h.a)(Object(h.a)({},e[t.qanswer.authedUser].answers),{},Object(d.a)({},t.qanswer.qid,t.qanswer.answer))})));case"REMOVE_USER":return e.filter((function(e){return e!==t.user}));case"REMOVE_USER_QUESTION":return Object(h.a)(Object(h.a)({},e),{},Object(d.a)({},t.user,Object(h.a)(Object(h.a)({},e[t.user]),{},{questions:e[t.user].questions.filter((function(e){return e!==t.questionId}))})));case"REMOVE_USER_ANSWER":return delete e[t.qanswer.authedUser].answers[t.qanswer.qid];default:return e}},authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHED_USER":return t.id;default:return e}}}),g=a(9),y=a(10),S=a(12),U=a(11);function N(){return function(e){return Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(h.a)({},b))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(h.a)({},v))}),1e3)}))]).then((function(e){var t=Object(p.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var a=t.users,n=t.questions;e(function(e){return{type:"RECEIVE_USERS",users:e}}(a)),e(function(e){return{type:"RECEIVE_QUESTIONS",questions:e}}(n))}))}}function x(e){return function(t,a){var n=a().authedUser;return O(e=Object(h.a)(Object(h.a)({},e),{},{author:n})).then((function(e){var a,r;t(j(e)),t((a=n,r=e.id,{type:"ADD_USER_QUESTION",user:a,questionId:r}))})).catch((function(a){console.warn("There was an error",a),t(w(e))}))}}function T(e){return function(t,a){var n=a().authedUser;return console.log(e),e=Object(h.a)(Object(h.a)({},e),{},{authedUser:n}),t({type:"ADD_QUESTION_ANSWER",qanswer:e}),t(function(e){return{type:"ADD_USER_ANSWER",qanswer:e}}(e)),f(e).catch((function(a){console.warn("There was an error",a),t(function(e){return{type:"REMOVE_QUESTION_ANSWER",qanswer:e}}(e)),t({type:"REMOVE_USER_ANSWER",user:e})}))}}var k=a(31),R=a(42),A=a(49),C=a(48),Q=function(e){Object(S.a)(a,e);var t=Object(U.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSelectedUser=function(t){t.preventDefault();var a=t.target.users.value;"select user"!==a.toLowerCase()&&e.props.dispatch(q(a))},e}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement(A.a,{className:"text__center"},r.a.createElement("div",{className:"login__page"},r.a.createElement("h1",null,"Welcome to Would You Rather App! "),r.a.createElement("div",{className:"image__login App-logo success"},"WYR"),r.a.createElement("p",null," Please sign in to continue"),r.a.createElement(R.a,{onSubmit:this.handleSelectedUser},r.a.createElement(R.a.Control,{as:"select",name:"users"},r.a.createElement("option",{value:null}," Select User"),this.props.users.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement(k.a,{variant:"success",size:"lg",block:!0,className:"button button__login",type:"submit"},"Sign in"))))))}}]),a}(n.Component);var D=Object(c.b)((function(e){var t=e.users;return{users:Object.keys(t).map((function(e){return{id:t[e].id,name:t[e].name}}))}}))(Q),I=a(6),V=a(76),L=function(e){Object(S.a)(a,e);var t=Object(U.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={optionOne:"",optionTwo:""},e.isDisabled=function(){var t=e.state,a=t.optionOne,n=t.optionTwo;return""===a||""===n},e.handleNewQuestion=function(t){t.preventDefault();var a=e.state,n=a.optionOne,r=a.optionTwo,o=e.props,s=o.dispatch,c=o.history;s(x({optionOneText:n,optionTwoText:r})),c.push("/")},e.handleInputChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this.state,t=e.optionOne,a=e.optionTwo;return r.a.createElement(C.a,null,r.a.createElement(V.a,null,r.a.createElement(A.a,null,r.a.createElement("div",{className:"newQuestion__header"},r.a.createElement("h1",null,"Create New Question"))),r.a.createElement(R.a,{onSubmit:this.handleNewQuestion,className:"question__form mb-3"},r.a.createElement("h2",null," Complete the question: "),r.a.createElement("h3",null,"Would you rather ..."),r.a.createElement(R.a.Control,{type:"text",placeholder:"Enter Option One Text Here",name:"optionOne",value:t,onChange:this.handleInputChange}),r.a.createElement("div",{className:"mb-3"},"OR"),r.a.createElement(R.a.Control,{type:"text",placeholder:"Enter Option Two Text Here",name:"optionTwo",value:a,onChange:this.handleInputChange}),r.a.createElement(k.a,{type:"submit",variant:"success",size:"lg",block:!0,disabled:this.isDisabled()},"Submit"))))}}]),a}(n.Component),z=function(e){Object(S.a)(a,e);var t=Object(U.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){var e=this.props.users;return r.a.createElement(C.a,null,r.a.createElement("div",{className:"leaderboard__header"},r.a.createElement("h1",null," Leaderboard ")),r.a.createElement("ul",null,r.a.createElement("div",{className:"question__card"},r.a.createElement("div",{className:"question__author leaderboard card"},e.sort((function(e,t){return t.total-e.total})).map((function(e,t){return r.a.createElement("li",{key:e.id},r.a.createElement(A.a,null,r.a.createElement("h3",null," ","#",t+1,": ",e.name)),r.a.createElement("div",{className:"author__information"},r.a.createElement("div",{className:"author__picture"},r.a.createElement("img",{src:"%PUBLIC_URL%".concat(e.avatar),alt:"Avatar for ".concat(e.name),width:250,height:250})),r.a.createElement("div",{className:"author__text"},r.a.createElement("div",null," Score : ",e.total),r.a.createElement("div",null," Answered Questions : ",e.answeredQuestions),r.a.createElement("div",null," Created Question : ",e.createdQuestions))))}))))))}}]),a}(n.Component);var P=Object(c.b)((function(e){var t=e.users;return{users:Object.keys(t).map((function(e){var a=Object.keys(t[e].answers).length+t[e].questions.length;return{id:t[e].id,name:t[e].name,avatar:t[e].avatarURL,answeredQuestions:Object.keys(t[e].answers).length,createdQuestions:t[e].questions.length,total:a}}))}}))(z),W=a(22),M=a(73),H=a(50),Y=a(74),B=a(75),F=function(e){Object(S.a)(a,e);var t=Object(U.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleLogout=function(t){return t.preventDefault(),e.props.dispatch(q(null)),e.props.history.push("/")},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement(C.a,null,r.a.createElement(M.a,null,r.a.createElement(H.a,null,r.a.createElement(Y.a,{bg:"dark"},r.a.createElement(B.a,{className:"mr-auto  nav nav__left"},r.a.createElement(W.b,{to:"/"},"Home"),r.a.createElement(W.b,{to:"/add"},"New Question"),r.a.createElement(W.b,{to:"/leaderboard"},"Leader Board")),r.a.createElement(B.a,{className:" nav nav__right"},e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"user__name"}," Hello ",e.name),r.a.createElement("img",{className:"user__picture",src:"%PUBLIC_URL%".concat(e.avatarURL),alt:"".concat(e.name,"'s avatar"),width:80,height:80}),r.a.createElement(k.a,{variant:"danger",onClick:this.handleLogout},"Logout")))))))}}]),a}(n.Component),J=Object(I.f)(F);var $=function(e){return r.a.createElement(C.a,null,r.a.createElement(A.a,{className:"notFound__page"},r.a.createElement("h1",null," Oops, Page not found")))},G=function(e){Object(S.a)(a,e);var t=Object(U.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleOptionResult=function(t){t.preventDefault();var a=t.target.options.value,n=e.props;(0,n.dispatch)(T({qid:n.question.id,answer:a}))},e}return Object(y.a)(a,[{key:"handlePercentageVote",value:function(e,t){return"".concat(Math.floor(100*e/t),"%")}},{key:"render",value:function(){var e=this.props,t=e.question,a=e.userVote,n=e.totalVotes,o=e.optionOneVotes,s=e.optionTwoVotes,c=e.author;return r.a.createElement(C.a,null,t?r.a.createElement("div",null,r.a.createElement("h1",null,"Would You Rather "),r.a.createElement(R.a,{onSubmit:this.handleOptionResult,className:"card"},r.a.createElement("div",{key:t.id},r.a.createElement(A.a,null,a?r.a.createElement("h2",null," Asked by ",c.name):r.a.createElement("h2",null," ",c.name," asks: ")),r.a.createElement("div",{className:"question__card"},r.a.createElement("div",{className:"question__author"},r.a.createElement("img",{src:"%PUBLIC_URL%/".concat(c.picture),alt:"Author",width:250,height:250})),r.a.createElement("div",{className:"question__text"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"votes ".concat("optionOne"===a&&"voted__for")},r.a.createElement("div",null,"optionOne"===a&&"You voted for :"," ",t.optionOne.text," "),r.a.createElement("div",{className:"percentage"},r.a.createElement("div",{className:"percentage__vote",style:{width:"".concat(this.handlePercentageVote(o,n))}},r.a.createElement("div",null," ",this.handlePercentageVote(o,n)," "))),r.a.createElement("div",null,o," of ",n," votes")),r.a.createElement("div",{className:"votes ".concat("optionTwo"===a&&"voted__for")},r.a.createElement("div",null," ","optionTwo"===a&&"You voted for :"," ",t.optionTwo.text," "),r.a.createElement("div",{className:"percentage"},r.a.createElement("div",{className:"percentage__vote",style:{width:"".concat(this.handlePercentageVote(s,n))}},r.a.createElement("div",null," ",this.handlePercentageVote(s,n)," "))),r.a.createElement("div",null,s," of ",n," votes"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(R.a.Check,{type:"radio",id:"optionOne",value:"optionOne",name:"options",defaultChecked:!0,label:t.optionOne.text})),r.a.createElement("div",null," OR "),r.a.createElement("div",null,r.a.createElement(R.a.Check,{type:"radio",id:"optionTwo",value:"optionTwo",name:"options",label:t.optionTwo.text})),r.a.createElement(k.a,{variant:"success",type:"submit"},"Submit"))))))):r.a.createElement($,null))}}]),a}(n.Component);var K=Object(c.b)((function(e,t){var a=e.questions,n=e.users,r=e.authedUser,o=t.match.params.question_id,s=a[o]?Object.keys(a[o].optionOne.votes).length:0,c=a[o]?Object.keys(a[o].optionTwo.votes).length:0,i=a[o]?Object.keys(a[o].optionOne.votes).length+Object.keys(a[o].optionTwo.votes).length:0;return{question:a[o],userVote:n[r].answers[o],totalVotes:i,optionOneVotes:s,optionTwoVotes:c,author:{picture:a[o]?n[a[o].author].avatarURL:null,name:a[o]?n[a[o].author].name:null},users:n}}))(G),X=a(56),Z=function(e){Object(S.a)(a,e);var t=Object(U.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={isAnswered:!1},e.handleSortedQuestions=function(e){return e.sort((function(e,t){return t.timestamp-e.timestamp}))},e.handleClick=function(t){t.preventDefault(),"answered"===t.target.name?e.setState({isAnswered:!0}):e.setState({isAnswered:!1})},e.buildQuestion=function(t){return t.map((function(t){var a=e.props.authors.filter((function(e){return e.id===t.author}));return r.a.createElement("div",{key:t.id,className:"card"},r.a.createElement(A.a,null,e.state.isAnswered?r.a.createElement("h2",null," Asked by ",a[0].name," "):r.a.createElement("h2",null," ",a[0].name," asks: ")),r.a.createElement("div",{className:"question__card"},r.a.createElement("div",{className:"question__author"},r.a.createElement("img",{src:"%PUBLIC_URL%".concat(a[0].avatarURL),alt:"Author",width:250,height:250})),r.a.createElement("div",{className:"question__text"},r.a.createElement("h3",null," Would You rather "),r.a.createElement("div",null," ...",t.optionOne.text,"... "),r.a.createElement(W.b,{to:"/questions/".concat(t.id),className:"btn btn-success"},"View Poll"))))}))},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this.props,t=e.unAnsweredQuestions,a=e.answeredQuestions,n=this.state.isAnswered,o=this.handleSortedQuestions(t),s=this.handleSortedQuestions(a);return r.a.createElement(C.a,{className:"dashboard"},r.a.createElement("div",null,r.a.createElement("div",{className:"buttons"},r.a.createElement(k.a,{className:!n&&"active text__color",variant:n?"secondary":"success",onClick:this.handleClick,name:"notanswered"},"UnAnswered Question"),r.a.createElement(k.a,{className:n&&"active text__color",variant:n?"success":"secondary",onClick:this.handleClick,name:"answered"},"Answered Question")),n?this.buildQuestion(s):this.buildQuestion(o)))}}]),a}(n.Component);var ee=Object(c.b)((function(e){var t=e.users,a=e.authedUser,n=e.questions,r=Object.keys(n),o=Object.keys(t[a].answers),s=r.filter((function(e){return!o.includes(e)})),c=r.filter((function(e){return o.includes(e)})),i=Object(X.a)(new Set(r.map((function(e){return t[n[e].author]}))));return{unAnsweredQuestions:s.map((function(e){return n[e]})),answeredQuestions:c.map((function(e){return n[e]})),authors:i}}))(Z),te=function(e){Object(S.a)(a,e);var t=Object(U.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(N())}},{key:"render",value:function(){var e=this.props,t=e.authedUser,a=e.users,n=e.dispatch;return r.a.createElement(C.a,{fluid:"md"},r.a.createElement(J,{user:t,dispatch:n,users:a}),r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/",component:t?ee:D}),r.a.createElement(I.a,{exact:!0,path:"/add",render:function(e){var a=e.history;return t?r.a.createElement(L,{dispatch:n,history:a}):r.a.createElement(D,{dispatch:n,history:a})}}),r.a.createElement(I.a,{exact:!0,path:"/leaderboard",component:t?P:D}),r.a.createElement(I.a,{path:"/questions/:question_id",component:t?K:D}),r.a.createElement(I.a,{path:"*",component:t?$:D})))}}]),a}(n.Component);var ae=Object(c.b)((function(e){return{authedUser:e.users[e.authedUser]}}))(te),ne=(a(69),a(70),Object(i.d)(_,m));s.a.render(r.a.createElement(W.a,{basename:"/Would-You-Rather"},r.a.createElement(c.a,{store:ne},r.a.createElement(ae,null))),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.4575801b.chunk.js.map