'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const Header = require('../shared/header/index.jsx');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

module.exports = Home;
