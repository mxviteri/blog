'use strict';

import React from 'react';
import Header from '../../shared/header/index.jsx';
//Links for the bottom of the article
//https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-linux.html
//https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-configuration.html
//https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-getting-started.html
//https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-ssh.html

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
          <h2>This post will demonstrate how to install the awsebcli and connect to your Elastic Beanstalk servers remotely</h2>
          <div className="post">
            <p><span className="number">1.</span>The first thing we need to do is install the cli tool to allow us to communicate with our environment.
            So from our terminal, let's run <span className="command">pip install awsebcli</span>. Note that Python, and it's package manager (pip)
            are required for this. If you don't have Python installed, you can follow the Amazon doc <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-linux.html" target="_blank">here</a>
            </p>
            <p><span className="number">2.</span>The next step is to initialize your project directory to set up EB CLI with your project. To do
            that, <i>cd</i> into the root of your project and run <span className="command">eb init</span>. This command is interactive and will
            ask you a bunch of questions but they are pretty straightforward. More documentation for this command is <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-configuration.html" target="_blank">here</a>
            </p>
            <p><span className="number">3.</span>Now that we have our project configured, you may want to set a default environment like this <span className="command">eb use my-env-name</span>. It's not necessary, but if you don't set one you'll need to reference your
            environment explicitly when using a lot of eb commands. One example is doing a health check. You can do that by running <span className="command">eb health my-env-name</span>.
            In this example, <i>my-env-name</i> references the name of your elasticbeanstalk environment. A list of those can be found under <b>All Applications</b> in the Elastic Beanstalk section
            in the AWS Management Console. A list of other commands and their uses can be found <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-getting-started.html" target="_blank">here</a>
            </p>
            <p><span className="number">4.</span>Finally, what we came here to do. With all the configuration setup, we simply need to run <span className="command">eb ssh my-env-name</span> to
            ssh into one of our ec2 instances. We can type <span className="command">exit</span> to logout and close our connection. More info about the command
            can be found <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-ssh.html" target="_blank">here</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SSHEC2;
