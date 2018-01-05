'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Header from '../shared/header/index.jsx';
import Articles from '../shared/articles/index.js';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: Articles
    }
  }

  toArticle(path) {
    window.location.href = `${window.location.origin}/posts/${path}`;
  }

  render() {
    return (
      <div className="home">
        <Header />
        <div className="flex-container">
          {this.state.articles.map((article, index) => {
            return (
              <Card key={index} className="card" onClick={() => {this.toArticle(article.link)}}>
                <CardHeader className="card--header">
                  <img src={article.img} />
                </CardHeader>
                <CardText>
                  <p>{article.title}</p>
                </CardText>
              </Card>
            );
          })}
        </div>
      </div>
    )
  }
}

export default Home;
