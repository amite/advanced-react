import React, { Component } from 'react'

import ArticleList from './ArticleList'

import DataApi from 'state-api'
import { data } from '../testData'

const api = new DataApi(data)

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    }
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  }

  render () {
    return (
      <ArticleList 
        articles={this.state.articles} 
        authors={this.state.authors} 
        articleActions={this.articleActions}
      />
    )
  }
}

export default App