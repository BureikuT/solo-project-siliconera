import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ArticlePreviews from '../ArticlePreviews/ArticlePreviews'

class PS4 extends Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        axios.get(`/api/get-ps4`).then(response => {
            this.setState({ articles: response.data })
        })
    }

    render() {

        const ps4Articles = this.state.articles.map((article, index) => <ArticlePreviews key={this.state.articles.article_id} articleInfo={article} />)
        return (
            <div>
                <div className='section'>PLAYSTATION 4</div>
                {ps4Articles}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.receiveArticle.data
    }
}

export default connect(mapStateToProps)(PS4)