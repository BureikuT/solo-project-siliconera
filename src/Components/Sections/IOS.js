import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ArticlePreviews from '../ArticlePreviews/ArticlePreviews'

class IOS extends Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        axios.get(`/api/get-ios`).then(response => {
            this.setState({ articles: response.data })
        })
    }

    render() {

        const iosArticles = this.state.articles.map((article, index) => <ArticlePreviews key={this.state.articles.article_id} articleInfo={article} />)
        return (
            <div>
                <div className='section'>IOS</div>
                {iosArticles}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.receiveArticle.data
    }
}

export default connect(mapStateToProps)(IOS)