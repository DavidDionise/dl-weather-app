import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from 'components/MainLayout';

const App = () => (
  <Router>
    <MainLayout />
  </Router>
);

export default hot(module)(App);
