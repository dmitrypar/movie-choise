import React from 'react'
import  MainPage from './mainPage/mainPage'

const Film = (props) => {
    const isPath = props.match.path 
    return (
       
            <MainPage isPath={isPath}/>
       
    )
}

export default Film
