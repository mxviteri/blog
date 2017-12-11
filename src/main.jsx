'use strict'

// require('./styles/main.scss');

const React = require('react');
const ReactDOM = require('react-dom');
// const Router = require('./router.jsx');

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Testing</h1>
    )
  }
}

ReactDOM.render(<Test />, document.getElementById('container'));
