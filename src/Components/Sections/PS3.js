import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ArticlePreviews from '../ArticlePreviews/ArticlePreviews'

class PS3 extends Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        axios.get(`/api/get-ps3/`).then(response => {
            this.setState({ articles: response.data })
        })
    }

    render() {

        const ps3Articles = this.state.articles.map((article, index) => <ArticlePreviews key={this.state.articles.article_id} articleInfo={article} />)
        return (
            <div>
                {ps3Articles}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.receiveArticle.data
    }
}

export default connect(mapStateToProps)(PS3)