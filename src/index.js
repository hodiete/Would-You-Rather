import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import applyMiddleWare from "./middleware";
import reducers from "./reducers";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
const store = createStore(reducers, applyMiddleWare);

ReactDOM.render(
 <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
   <App />
  </Provider>
 </BrowserRouter>,
 document.getElementById("root")
);
