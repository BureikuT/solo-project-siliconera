import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../ducks/user'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { getResults } from '../../ducks/resultsReducer'
import logo from '../../siliconeraPics/logo.png'
import Dropdown from './Dropdown'

import './Header.css'

const BASE_URL = 'http://localhost:3000'

class Header extends Component {
    constructor() {
        super()
        this.state = {
        
            submissionSucess: false
        }
    }

    login = () => {
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`;
        let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
        let scope = encodeURIComponent("openid profile email");
        let redirectUri = encodeURIComponent(
            `${window.location.origin}/auth/callback`
        );

        let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`;

        window.location = location;
    }

    logout = () => {
        this.props.logout()
        this.props.history.push('/')
    }

    

    render() {


        return (
            <div>
                <div className='headerForm'>
                    <div>
                        <img src={logo} />
                    </div>
                    <div>
                        {this.props.user ?
                            (
                                <div className='right-side'>
                                    <div className='logout' onClick={this.logout}>
                                    
                                        Logout
                                </div>
                                    <div>
                                     <img className='profilePic' src={this.props.user.picture} />
                                    </div>
                                    <div className='userName'>
                                    {this.props.user.name}
                                    </div>
                                    <div className='createArticle'>
                                    <button><Link  to='/create-article'>Create Article</Link></button> 
                                    </div>

                                </div>
                            ) : (
                                <div className='loginButton' onClick={this.login}>Login</div>
                                
                            )
                        }
                    </div>
                </div>
                <div>
                <Dropdown />
                </div>
            </div>

        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default withRouter(connect(mapStateToProps, { logout, getResults })(Header))
