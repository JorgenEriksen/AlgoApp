import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewQuestion from './containers/NewQuestion';
import reportWebVitals from './reportWebVitals';
// @ts-ignore
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import QuestionList from "./containers/EditQuestionPage"
import NavBar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route exact path='/'><NewQuestion /></Route>
        <Route path='/edit'><QuestionList /></Route>
      </Switch>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
