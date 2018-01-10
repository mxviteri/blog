'use strict';

import React from 'react';
import Header from '../../shared/header/index.jsx';

class ThirdPartyAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="third-party-auth">
          <div className="container">
            <h1>High level third-party authentication overview</h1>
            <h2>A simple walkthrough of how authentication works and in used in many websites/apps</h2>
            <div className="post">
              <div className="article">
                <p>The first thing that needs to happen is to get set up with an authentication system. <a href="https://auth0.com/" target="_blank">Auth0</a> is a popular one.
                The system will provide apis you can integrate with using a client id and secret like most third party integrations. Once configured, you'll provide
                a way to send the system your user's usernames and passwords. Auth0 (in this case) will manage these for you in a centralized location. This is the
                concept of <i>federated identity</i>.
                </p>
                <p>When a user signs up or logs in with their credentials, Auth0 takes those credentials and hands you back a JWT (<a href="https://jwt.io/" target="_blank">json web token</a>).
                This token is usually stored in a cookie, or in broswer local storage on your applications frontend and then passed to your backend with an Authentication header.
                </p>
                <p>So how do you know if a user should be logged in? Simply the presence of the above mentioned cookie. Typically, there is logic on the webpage to check if
                  the cookie exists when a user navigates to the page. If it's there, the user is good to go. Send them to the requested page. If not they get kicked over to
                  a login page.
                </p>
                <p>What happens when a user logs out? The website will clear the cookies and redirect you to a logged out page. Additionally, by setting an expiration on
                  the cookie, you can control how long a user's session should be valid for. If a user navigates to your page after say, 24 hours, and the cookie is expired
                  you can kick the user out to the log in page with some notification that their session has expired.
                </p>
                <p>That's it! A quick overview of authentication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdPartyAuth;
