import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';

import Login from './components/login/Login'
import { Container } from 'react-bootstrap';
import LoanSearch from './components/loan-search/LoanSearch';

function App() {
  return (<>
    <Router>
      <Header />
      <Container className="d-flex justify-content-center align-items-center">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/loan-search" exact component={LoanSearch}/>
        </Switch>

      </Container>
    </Router>
  </>
  );
}

export default App;
