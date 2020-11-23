import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Film from './pages/film'
import Search from './pages/search'

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/" component={Search} exact/> 
            <Route path="/film/:slug" component={Film}/>
            <Route path="/search" component={Search}/>
        </Switch>
    )
}

export default Routes
