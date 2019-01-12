import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticlePreviews from '../ArticlePreviews/ArticlePreviews'

class Results extends Component {

    render() {
        const resultsArticles = this.props.results.map((article, index) => <ArticlePreviews key={article.article_id} articleInfo={article} />)
        return (
            <div>
                {resultsArticles}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state)
    return {
        results: state.resultsReducer.data
    }


}

export default connect(mapStateToProps)(Results)