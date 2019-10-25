import React, {Component}from 'react';
import Layout from './form/Layout';
import Form from './form/Form'
import './App.css';
import Edit from './form/Edit'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


 export class  App extends Component {
  render(){  return (
    <Router>
    <div className="App">
    {/* <Form/> */}
    {/* <Layout/>    */}
    <Switch>
              <Route exact path='/' component={ Layout } />
              {/* <Route path='/edit/:id' component={ Edit } /> */}
          </Switch>
    </div>
    </Router>
  );
}}

export default App;
