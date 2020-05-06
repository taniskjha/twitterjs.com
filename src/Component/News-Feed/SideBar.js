import React from 'react'
import '../Css/NewsFeed.css'
import { Link } from 'react-router-dom'


function SideBar() {
    return (
        <nav className="feeds-nav shadow-md">
            <div class="icons">
                <Link to="/" className="active"><i className="fas fa-home"></i> Home </Link>
                <Link to="/" className="text-dark" ><i className="fas fa-hashtag"></i> Explore </Link>
                <Link to="/" className="text-dark" ><i className="far fa-bell"></i> Notifications </Link>
                <Link to="/" className="text-dark"><i className="far fa-envelope"></i> Messages </Link>
            </div>

            <div className="search-bar">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="search twitter" className="search-bar-input"></input>
            </div>

            <div className="user">
                <div className="user-img-wrapper">
                    <img alt="" src="/images/tanisk.jpg" />
                </div>
                <Link to='/feed' className="user-link">Tanisk</Link>
                <i className="fas fa-chevron-down"></i>
            </div>


        </nav>

    )
}

export default SideBar
