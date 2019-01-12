import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ArticlePreviews from '../ArticlePreviews/ArticlePreviews'

class PSP extends Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        axios.get(`/api/get-psp`).then(response => {
            this.setState({ articles: response.data })
        })
    }

    render() {

        const pspArticles = this.state.articles.map((article, index) => <ArticlePreviews key={this.state.articles.article_id} articleInfo={article} />)
        return (
            <div>
                {pspArticles}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.receiveArticle.data
    }
}

export default connect(mapStateToProps)(PSP)