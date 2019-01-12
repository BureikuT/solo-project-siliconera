import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './CreateComment.css'

import { handleInputChange } from '../../ducks/commentReducer'


const BASE_URL = 'http://localhost:3001'

class CreateComment extends Component {
    handlePost = (e) => {
        e.preventDefault()

        const { user, article_id, comment } = this.props

        const commenter = this.props.user.id
        const articleId = this.props.article_id

        const obj = { user, articleId, comment }

        axios.post(BASE_URL + '/api/post-comment', obj).then(res => {
            console.log('res', res.data)
        })
    }
    render() {
        console.log('props', this.props)
        return (
            <div className='comment-box'>
                <ReactQuill
                    theme="snow"
                    modules={CreateComment.modules}
                    formats={CreateComment.formats}
                    value={this.props.comment}
                    onChange={this.props.handleInputChange}
                    placeholder="Comment Box"
                />

                <div>
                    <button onClick={this.handlePost}>Post</button>
                </div>
            </div >
        )
    }
}

CreateComment.modules = {
    toolbar: [
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
}

CreateComment.formats = [
    'size',
    'bold', 'italic', 'underline',
    'strike', 'blockquote',
    'list', 'bullet', 'link',
    'image', 'video', 'code-block'
]

const mapStateToProps = state => {
    return {
        comment: state.commentReducer.comment,
        user: state.user.data,
    }
}

export default connect(mapStateToProps, { handleInputChange })(CreateComment)