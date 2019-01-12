import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Bottom from './Components/Bottom/Bottom'
import routes from './routes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from './ducks/user'
import { getArticles } from './ducks/receiveArticle'


class App extends Component {
  componentDidMount() {
    this.props.getUser()
    this.props.getArticles()
  }

  render() {
    return (
      <div>
        <Header />
        {routes}
      
      </div>
    )
  }
}

export default withRouter(connect(
  null,
  { getUser, getArticles }
)(App))