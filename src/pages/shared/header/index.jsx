'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  getClassName() {
    if (window.location.pathname === '/') {
      return 'toHide';
    }
    return null;
  }

  render() {
    return (
      <div className="header">
        <div className="titleWrapper">
          <h1 className="cursive">Matt Viteri</h1>
          <h1 className="sans"> - blog</h1>
        </div>
        <div className="nav">
          <div className={this.getClassName()}>
            <Link to="/">Home</Link>
            <span>|</span>
          </div>
          <a href="https://www.mattviteri.com">mattviteri.com</a>
        </div>
      </div>
    );
  }
}

export default PageHeader;
