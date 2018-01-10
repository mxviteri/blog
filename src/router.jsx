'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './pages/home/index.jsx';
import SSHEC2 from './pages/posts/ssh-ec2/index.jsx';
import ThirdPartyAuth from './pages/posts/third-party-auth/index.jsx';
import Articles from './pages/shared/articles/index.js';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);

    this.articles = Articles;
  }

  handlePageUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Router onUpdate={this.handlePageUpdate} history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/posts/ssh-ec2' component={SSHEC2} />
        <Route path='/posts/third-party-auth' component={ThirdPartyAuth} />
      </Router>
    );
  }
}

export default AppRouter;
