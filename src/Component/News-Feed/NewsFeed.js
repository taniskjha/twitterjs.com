import React from 'react'
import '../Css/NewsFeed.css'
import { Link } from 'react-router-dom'

function NewsFeed() {
    return (
        <div className="feeds_page">
            {/* News Feed Navbar */}

            <nav className="feeds-nav shadow-lg ">
                <div class="icons">
                    <Link to="/feed" className="active"><i className="fas fa-home"></i> Home </Link>
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
                        <img alt="" src="/images/2.jpg" />
                    </div>
                    <Link to='/feed' className="user-link">Joyce</Link>
                    <i className="fas fa-chevron-down"></i>
                </div>


            </nav>


            {/* End of News Feed Navbar */}
        </div>
    )
}

export default NewsFeed
