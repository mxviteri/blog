'use strict';

import React from 'react';
import Header from '../../shared/header/index.jsx';

class SSHEC2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ssh-ec2">
        <Header />
        <div className="container">
          <h1>How to ssh into your EC2 instances</h1>
        </div>
      </div>
    );
  }
}

export default SSHEC2;
