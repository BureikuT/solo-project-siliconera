import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ArticlePreviews from '../ArticlePreviews/ArticlePreviews'

class Vita extends Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        axios.get(`/api/get-vita`).then(response => {
            this.setState({ articles: response.data })
        })
    }

    render() {

        const vitaArticles = this.state.articles.map((article, index) => <ArticlePreviews key={this.state.articles.article_id} articleInfo={article} />)
        return (
            <div>
                {vitaArticles}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.receiveArticle.data
    }
}

export default connect(mapStateToProps)(Vita)