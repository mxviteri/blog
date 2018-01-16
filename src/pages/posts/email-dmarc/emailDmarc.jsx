'use strict';

import React from 'react';
import Header from '../../shared/header/index.jsx';

class EmailDmarc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="email-dmarc">
          <div className="container">
            <h1>Sending email to yourself and avoiding DMARC</h1>
            <h2>How to send email to yourself, from potential customers on a personal website</h2>
            <div className="post">
              <div className="article">
                <p>First of all what is DMARC? DMARC stands for “Domain-based Message Authentication, Reporting & Conformance” and (very simply for the purpose of this article)
                  means that I can't set the 'From:' property on an email to anything other than a domain that I own and have registered with the email service. So if I want to
                  send email to my site's visitors (or myself), I can't send the email from <a href="">gmail.com</a> for example. If that seems obvious, consider the below example.
                </p>
                <p>Many people building a personal website want to add a way to have visitors send them an email. Typically there's an email form somewhere on
                  the site that will be responsible for relaying that message. Behind that form is usually a service like Nodemailer, Mailgun or SendGrid. By the way,
                  you can find instructions on setting up one of these services (e.g. Mailgun) <a href="https://documentation.mailgun.com/en/latest/quickstart.html" target="_blank">here</a>.
                </p>
                <p>Ok so when I'm sending that email to myself. I'd like to set the from address of the email to the email the user entered in the form. That way I'll know who to
                  reply to. Someone submits the form with their email <i>john@example.com</i> and a message and then I'll set that email address in the from field using a mail
                  service from above (Nodemailer) so that when I get the email I can just hit 'reply' and answer that person back. But I can't do that because of DMARC. I don't own
                  that domain.
                </p>
                <code className="command">
                  {
                    `
                    var mailgun = require("mailgun-js");
                    var api_key = 'YOUR_API_KEY';
                    var DOMAIN = 'YOUR_DOMAIN_NAME';
                    var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

                    var data = {
                      from: 'Excited Visitor <john@example.com>',
                      to: 'you@yourdomain.com, you@personalemail.com',
                      subject: 'Hello',
                      text: 'I stumbled across your site and wanted to reach out..'
                    };

                    mailgun.messages().send(data, function (error, body) {
                      console.log(body);
                    });

                    `
                  }
                </code>
                <p>In the above code snippet, I've attempted unsuccessfully to programatically assign our visitor (john@example.com) to the from property
                  and send the email. Because we can't do this based on the explanation above, let's try something else.
                </p>
                <code className="command">
                  {
                    `
                    var data = {
                      from: 'Excited Visitor <uuidv4()@yourdomain.com>',
                      'h:Reply-To': '<john@example.com>',
                      to: 'you@yourdomain.com, you@personalemail.com',
                      subject: Hello,
                      text: 'I stumbled across your site and wanted to reach out..'
                    };

                    `
                  }
                </code>
                <p>So what's different? Instead, we've sent the email from our own verified domain. We kept the visitor's name on the from field the same
                  so we know who's trying to contact us. Additionally, we set the 'h:Reply-To' property to the visitor's email address. Now we will get an
                  email from our own site with the visitor's name and when we hit 'reply' we will be responding to the visitor's email address. And that's
                  one way we can send email from our site while being in compliance with DMARC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailDmarc;
