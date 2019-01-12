import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import LandingPage from './Components/LandingPage/LandingPage'
import CreateArticle from './Components/CreateArticle/CreateArticle'
import PreviewArticle from './Components/PreviewArticle/PreviewArticle'
import MessageBoard from './Components/Sections/MessageBoard'
import ThreeDS from './Components/Sections/ThreeDS'
import NSwitch from './Components/Sections/NSwitch'
import PS4 from './Components/Sections/PS4'
import PS3 from './Components/Sections/PS3'
import Vita from './Components/Sections/Vita'
import PSP from './Components/Sections/PSP'
import IOS from './Components/Sections/IOS'
import XOne from './Components/Sections/XOne'
import X360 from './Components/Sections/X360'
import Interviews from './Components/Sections/Interviews'
import ArticlePage from './Components/ArticlePage/ArticlePage'
import Results from './Components/Results/Results'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/landing-page' component={LandingPage} />
        <Route path='/create-article' component={CreateArticle} />
        <Route path='/preview-article' component={PreviewArticle}/>
        <Route path='/edit/:id' component={CreateArticle}/>
      {/* seperate */}
        <Route path='/message-board' component={MessageBoard}/>
        <Route path='/3ds' component={ThreeDS}/>
        <Route path='/nintendo-switch' component={NSwitch}/>
        <Route path='/ps4' component={PS4}/>
        <Route path='/ps3' component={PS3}/>
        <Route path='/ps-vita' component={Vita}/>
        <Route path='/psp' component={PSP}/>
        <Route path='/ios' component={IOS}/>
        <Route path='/xbox-one' component={XOne}/>
        <Route path='/xbox-360' component={X360}/>
        <Route path='/interviews' component={Interviews}/>
        <Route path='/articles/:id' component={ArticlePage}/>
        <Route path='/search-results' component={Results}/>
       
    </Switch>
)
