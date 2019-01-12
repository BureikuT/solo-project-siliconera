import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './PreviewArticle.css'
import axios from 'axios'
import { resetState } from '../../ducks/articleReducer'
import { Redirect } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import renderHTML from 'react-render-html'

const BASE_URL = 'http://localhost:3001'

class PreviewArticle extends Component {

    constructor() {
        super()
        this.state = {
            submissionSucess: false
        }
    }

 
    handleSubmit = () => {

        const { title, previewImage, image, previewSummary, article, systems, locations, user } = this.props


        let systemResults = [];
        let checked = Object.entries(this.props.systems).filter(([system, value]) => value === true)
        checked.forEach(function ([item]) {
            systemResults.push(item)
        })

        let locationResults = []
        let locaChecked = Object.entries(this.props.locations).filter(([location, value]) => value === true)
        locaChecked.forEach(function ([item]) {
            locationResults.push(item)
        })

        let author = this.props.user.name

        let authorId = this.props.user.id

        const obj = {
            title, previewImage, image, previewSummary, article, systemResults, locationResults, author, authorId
        }

        axios.post(BASE_URL + '/api/create-article', obj).then(res => {
            if (res.status === 200) {
                this.setState({ submissionSuccess: true })
                this.props.resetState();
                console.log(res.status)
            }
        })
    }


    render() {
        return (
            <div>
                {this.state.submissionSuccess && <Redirect to='/landing-page' />}
                <div className='articlePreview'>
                    <div className='previewImage'>
                        <img src={this.props.previewImage} />
                    </div>
                    {this.props.title}
                    <p>{renderHTML(this.props.previewSummary)}</p>
                </div>
                <br />
                <div className='fullArticle'>
                    {this.props.value}
                    <image src={this.props.image} />
                    <p>{renderHTML(this.props.article)}</p>
                    <div>
                        <br />
                        <button onClick={this.handleSubmit}> TEST </button>
                    </div>
                    <div>
                        <Link to='/create-article'><button>Edit Article</button></Link>
                    </div>
                    <div>
                        <br />

                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    console.log(state)
    return {
        title: state.articleReducer.title,
        previewImage: state.articleReducer.previewImage,
        previewSummary: state.articleReducer.previewSummary,
        image: state.articleReducer.image,
        article: state.articleReducer.article,
        value: state.articleReducer.genre,
        locations: state.articleReducer.locations,
        systems: state.articleReducer.systems,
        user: state.user.data
    }
}

export default connect(mapStateToProps, { resetState })(PreviewArticle)