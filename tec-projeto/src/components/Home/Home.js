import React,{ Component } from 'react'

import './Home.scss'

import Navbar from '../Navbar/Navbar'
import Posts from '../Posts/Posts'


class Home extends Component{
    render(){
        return(
            <div className="mainContainer">
                <Navbar />
                <Posts />
            </div>
        )
    }
}

export default Home