import React, { Component } from 'react'
import './CreateArticle.css'
import axios from 'axios'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import renderHTML from 'react-render-html'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import { handleInputChange, handleLocationsChange, handleSystemsChange, handlePreviewChange, handleBodyChange } from '../../ducks/articleReducer'



class CreateArticle extends Component {

    handleSystemBoxes = () => {
        let systemResults = [];
        let checked = document.getElementsByName('systems')

        for (let i in checked) {
            checked[i].checked === true ? systemResults.push(checked[i].value) : null
        }
        console.log('systemResults', systemResults)
        return systemResults
    }

    handleLocationBoxes = () => {
        let locationResults = [];
        let checked = document.getElementsByName('locations')

        for (let i in checked) {
            checked[i].checked === true ? locationResults.push(checked[i].value) : null
        }
        console.log('locationResults', locationResults)
        return locationResults
    }



    render() {

        return (
            <div className='articleCreation'>
                <div className='templateTitle'>
                    New Article Template
                </div>
                <div className='title' >
                    <br />

                    <input
                        type='text'
                        value={this.props.title || ''}
                        placeholder='Title'
                        onChange={(e) => this.props.handleInputChange(e, 'title')}
                    />
                </div>
                <div className='previewImage'>
                    <br />

                    <input
                        type='text'
                        value={this.props.previewImage || ''}
                        placeholder='Preview Image'
                        onChange={(e) => this.props.handleInputChange(e, 'previewImage')} />
                </div>
                <div>
                    <br />

                    <input
                        type='text'
                        value={this.props.image || ''}
                        placeholder='Header Image'
                        onChange={(e) => this.props.handleInputChange(e, 'image')} />
                </div>
                
                <div className='systems'>
                
                    <br />
                
                        <form onChange={e => this.props.handleSystemsChange(e.target.value)}>
                        <h3>Choose The Systems</h3>
                            <input type='checkbox' name='systems' value='3ds' checked={this.props.systems.threeDS} onClick={this.handleSystemBoxes} />
                            3DS<br />
                            <input type='checkbox' name='systems' value='switch' checked={this.props.systems.switch} onClick={this.handleSystemBoxes} />
                            SWITCH<br />
                            <input type='checkbox' name='systems' value='ps4' checked={this.props.systems.ps4} onClick={this.handleSystemBoxes} />
                            PLAYSTATION 4<br />
                            <input type='checkbox' name='systems' value='ps3' checked={this.props.systems.ps3} onClick={this.handleSystemBoxes} />
                            PLAYSTATION 3<br />
                            <input type='checkbox' name='systems' value='vita' checked={this.props.systems.vita} onClick={this.handleSystemBoxes} />
                            VITA <br />
                            <input type='checkbox' name='systems' value='psp' checked={this.props.systems.psp} onClick={this.handleSystemBoxes} />
                            PSP <br />
                            <input type='checkbox' name='systems' value='ios' checked={this.props.systems.ios} onClick={this.handleSystemBoxes} />
                            iPHONE<br />
                            <input type='checkbox' name='systems' value='xOne' checked={this.props.systems.xOne} onClick={this.handleSystemBoxes} />
                            XBOX ONE<br />
                            <input type='checkbox' name='systems' value='x360' checked={this.props.systems.x360} onClick={this.handleSystemBoxes} />
                            XBOX 360<br />
                            <input type='checkbox' name='systems' value='interviews' checked={this.props.systems.interviews} onClick={this.handleSystemBoxes} />
                            INTERVIEW<br />
                        </form>

                    <div className='location'>
                        <br />
                        <form onChange={e => this.props.handleLocationsChange(e.target.value)}>
                        <h3>Choose The Locations</h3>
                            <input type='checkbox' name='locations' value='japan' checked={this.props.locations.japan} />
                            Japan<br />
                            <input type='checkbox' name='locations' value='northAmerica' checked={this.props.locations.northAmerica} />
                            North America<br />
                            <input type='checkbox' name='locations' value='europe' checked={this.props.locations.europe} />
                            Europe<br />
                        </form>
                    </div>
                    </div>
               
                <div className='SummaryArticle'>
                    <br />
                    <ReactQuill
                        theme="snow"
                        modules={CreateArticle.modules}
                        formats={CreateArticle.formats}
                        value={this.props.previewSummary}
                        onChange={this.props.handlePreviewChange}
                        placeholder='Article Summary'
                    />
                </div>
                <br />
                <div className='articleBox' >
                    <ReactQuill
                        theme="snow"
                        modules={CreateArticle.modules}
                        formats={CreateArticle.formats}
                        value={this.props.article}
                        onChange={this.props.handleBodyChange}
                        placeholder='Article Body'
                    />
                </div>
                <div>
                    <Link to='/preview-article'>
                        <button className= 'preview-button'>Preview Article</button>
                    </Link>
                </div>

            </div >
        )
    }
}

CreateArticle.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
}

CreateArticle.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline',
    'strike', 'blockquote',
    'list', 'bullet', 'link',
    'image', 'video', 'code-block'
]

const mapStateToProps = state => {
    return {
        title: state.articleReducer.title,
        previewImage: state.articleReducer.previewImage,
        previewSummary: state.articleReducer.previewSummary,
        image: state.articleReducer.image,
        article: state.articleReducer.article,
        value: state.articleReducer.value,
        locations: state.articleReducer.locations,
        systems: state.articleReducer.systems
    }
}

export default connect(mapStateToProps, { handleInputChange, handleLocationsChange, handleSystemsChange, handlePreviewChange, handleBodyChange })(CreateArticle)
