'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;
const Home = require('./pages/home/index.jsx');

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePageUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Router onUpdate={this.handlePageUpdate} history={browserHistory}>
        <Route path='/' component={Home} />
      </Router>
    );
  }
}

module.exports = AppRouter;
