'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="titleWrapper">
          <h1 className="cursive">Matt Viteri</h1>
          <h1 className="sans"> - blog</h1>
        </div>
      </div>
    );
  }
}

module.exports = PageHeader;
