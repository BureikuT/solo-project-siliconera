import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ArticlePreviews from '../ArticlePreviews/ArticlePreviews'
import ReactPaginate from 'react-paginate'
import './LandingPage.css'

class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            results: [],
            page: 1,
            size: 2,
            currentPage: null
        }
    }
    componentDidMount() {
        axios.get(`/api/get-articles`).then(response => {

            this.setState({ articles: response.data })
        })
        this.setState({ results: [] })
    }

    handlePageChange = (page, e) => {
        this.setState({
            currentPage: page
        });
    }



    render() {

        if (this.props.results.length > 0) {
            const resultsArticles = this.props.results.map((article, index) =>
                <ArticlePreviews key={article.article_id} articleInfo={article} />)
            return (
                <div className='grid-container'>
                <div className= 'sides'></div>
                    <div>THE LATEST</div>
                    <div className='results'>
                        {resultsArticles}
                    </div>
                    <div className="Pagination">

                    </div>

                </div>
            )
        } else {
            const homeArticles = this.state.articles.map((article, index) => <ArticlePreviews key={this.state.articles.article_id} articleInfo={article} />)
            return (
                <div className='grid-container'>
                    <div className='sections'>THE LATEST</div>
                    <div className='results'>
                        {homeArticles}
                    </div>
                    <div className='Pagination'>
                        {/* <ReactPaginate previousLabel={'previous'}
breakLabel={'...'}
breakClassName={"break-me'"}
pageCount={this.state.pageCount}
/> */}
                    </div>
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        articles: state.receiveArticle.data,
        results: state.resultsReducer.data
    }
}

export default connect(mapStateToProps)(LandingPage)