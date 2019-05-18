import React from 'react'
import { Link } from "react-router-dom"
import renderHTML from 'react-render-html'
import './ArticlePreviews.css'


const Articles = (props) => {
    console.log('props', props)
    return (
   
        <div className='articleList'>
            <Link to={`/articles/${props.articleInfo.article_id}`}>
                <div className='previewImage'>
                    <img className='image' src={props.articleInfo.preview_image} />
                </div>
            </Link>
            <div className='info'>
                <div className='previewArticleTitle'>
                <Link to={`/articles/${props.articleInfo.article_id}`}>
                    {props.articleInfo.title}
                </Link>
                </div>
                <div className='author'>
                    by {props.articleInfo.author_name} {props.articleInfo.created_on}
                </div>
                <div className='previewArticle'>
                    {renderHTML(props.articleInfo.preview_summary)}
                </div>
            </div>
        </div>
      
    )
}

export default Articles 