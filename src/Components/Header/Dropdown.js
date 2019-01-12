import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Select from 'react-select'
import { Redirect } from 'react-router'
import axios from 'axios'
import {connect} from 'react-redux'
import { getResults } from '../../ducks/resultsReducer'

import './Dropdown.css'

const BASE_URL = 'http://localhost:3000'



const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderTop: '2px solid #000000',
        padding: '5px',
        // border: '2px solid #000000',
        placeholder: "Older Systems",
        color: state.isSelected ? '#00000' : '#000000'
    })
}

const options = [
    { value: 'title', label: 'Older Systems' },
    { value: 'ps3', label: 'PlayStation 3' },
    { value: 'psp', label: 'PSP' },
    { value: 'xbox-360', label: 'Xbox 360' }
]

class Dropdown extends Component {
    constructor() {
        super()
        this.state = {
            searchInput: '',
            redirect: ''
        }
    }
    componentDidMount() {
        this.setState({ redirect: '' })
    }
    handleChange = (e) => {
        this.props.history.push('/' + e.value)
    }

    searchButton = (e) => {
        const searchItem = this.state.searchInput
        e.preventDefault()
        axios.post(BASE_URL + '/api/search-item', { searchInput: searchItem }).then(res => {
            if (res.status === 200) {
                this.props.getResults(res.data)
                this.setState({ submissionSuccess: true })
            }
        })
    }

    handleSearchBar = (e) => {
        console.log('event', e.target.value)
        this.setState({ searchInput: e.target.value })
    }
    
    render() {
        if (this.state.redirect) {
            console.log(this.state.redirect)
            //  <Redirect to={`/${this.state.redirect}`}/>
        }
        return (
            <div className='container'>
                <div className='item-left'><Link className='link'to='/landing-page'>Home</Link> </div>
                <div className='item'><Link className='link' to='/message-board'>Message Board</Link></div>
                <div className='item'><Link className='link' to='/3ds'>3DS</Link></div>
                <div className='item'><Link className='link' to='/nintendo-switch'>Switch</Link></div>
                <div className='item'><Link className='link' to='/ps4'>PS4</Link></div>
                <div className='item'><Link className='link' to='/ps-vita'>PS Vita</Link></div>
                <div className='item'><Link className='link' to='/xbox-one'>Xbox One</Link></div>
                <div className='item'><Link className='link' to='/ios'>iOS</Link></div>
                <div className='item'><Link className='link' to='/interviews'>Interviews</Link></div>
                <div className='custom-select'>
                    <Select onChange={this.handleChange}
                        styles={customStyles}
                        defaultValue={options[0]}
                        options={options} />
                </div>
                <div className='searchBorder'>
                    {/* <div className='searchBar'> */}
                        <input className ='searchBar' onChange={this.handleSearchBar} />
                        <button className='search-button' onClick={this.searchButton}><span><i class="fas fa-gamepad" ></i></span></button>
                    </div>
                </div>
 
        )
    }


}

export default withRouter(connect(null,{getResults})(Dropdown))