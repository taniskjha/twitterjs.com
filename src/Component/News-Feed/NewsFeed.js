import React from 'react'
import '../Css/NewsFeed.css'
import { Link } from 'react-router-dom'

function NewsFeed() {
    return (
        <section className="feeds_page">
            {/* News Feed Navbar */}

            <nav className="feeds-nav shadow-md">
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



            {/* feeds content */}
            <div className="feeds-content">
                <div className="feeds-header">
                    <div className="header-top">
                        <h4 style={{ fontWeight: "bold" }}>Home</h4>
                        <i className="far fa-star" />
                    </div>
                    <div className="header-post">
                        <div className="header-img-wrapper">
                            <img alt="" src="images/2.jpg" />
                        </div>
                        <input type="text" placeholder="What's happening?" />
                        <i className="far fa-image" />
                        <i className="fas fa-camera" />
                        <i className="far fa-chart-bar" />
                    </div>
                </div>
                <div className="posts">
                    <div className="post">
                        <div className="user-avatar">
                            <img alt="" src="images/1.jpg" />
                        </div>
                        <div className="post-content">
                            <div className="post-user-info">
                                <h4>Manish Singh</h4>
                                <i className="fas fa-check-circle" />
                                <span>@helenbrown 15m</span>
                            </div>
                            <p className="post-text">
                                My Pet, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptates et voluptatibus vel tenetur quos, id omnis sed error
                                fuga necessitatibus.
                            </p>
                            <div className="post-img">
                                <img alt="" src="images/dog.jpg" />
                            </div>
                            <div className="post-icons">
                                <i className="far fa-comment" />
                                <i className="fas fa-retweet" />
                                <i className="far fa-heart" />
                                <i className="fas fa-share-alt" />
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="user-avatar">
                            <img alt="" src="images/user3.jpg" />
                        </div>
                        <div className="post-content">
                            <div className="post-user-info">
                                <h4>Esther Duflo </h4>
                                <i className="fas fa-check-circle" />
                                <span>@janedoe 35m</span>
                            </div>
                            <p className="post-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptates et voluptatibus vel tenetur quos, id omnis sed error
                                fuga necessitatibus.
              </p>
                            <div className="post-img">
                                <img alt="" src="images/dog2.jpg" />
                            </div>
                            <div className="post-icons">
                                <i className="far fa-comment" />
                                <i className="fas fa-retweet" />
                                <i className="far fa-heart" />
                                <i className="fas fa-share-alt" />
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="user-avatar">
                            <img alt="" src="images/1.jpeg" />
                        </div>
                        <div className="post-content">
                            <div className="post-user-info">
                                <h4>John Doe</h4>
                                <i className="fas fa-check-circle" />
                                <span>@johnthompson 56m</span>
                            </div>
                            <p className="post-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptates et voluptatibus vel tenetur quos, id omnis sed error
                                fuga necessitatibus.
              </p>
                            <div className="post-img">
                                <img alt="" src="images/post-img-3.jpg" />
                            </div>
                            <div className="post-icons">
                                <i className="far fa-comment" />
                                <i className="fas fa-retweet" />
                                <i className="far fa-heart" />
                                <i className="fas fa-share-alt" />
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="user-avatar">
                            <img alt="" src="images/user5.jpg" />
                        </div>
                        <div className="post-content">
                            <div className="post-user-info">
                                <h4>James Dias</h4>
                                <i className="fas fa-check-circle" />
                                <span>@jamesdias 1h 07m</span>
                            </div>
                            <p className="post-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptates et voluptatibus vel tenetur quos, id omnis sed error
                                fuga necessitatibus.
                           </p>
                            <div className="post-img">
                                <img alt="" src="images/dog3.jpg" />
                            </div>
                            <div className="post-icons">
                                <i className="far fa-comment" />
                                <i className="fas fa-retweet" />
                                <i className="far fa-heart" />
                                <i className="fas fa-share-alt" />
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="user-avatar">
                            <img alt="" src="images/user6.jpg" />
                        </div>
                        <div className="post-content">
                            <div className="post-user-info">
                                <h4>Nick Johnson</h4>
                                <i className="fas fa-check-circle" />
                                <span>@nickjohnson 1h 37m</span>
                            </div>
                            <p className="post-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptates et voluptatibus vel tenetur quos, id omnis sed error
                                fuga necessitatibus.
                            </p>
                            <div className="post-img">
                                <img alt="" src="images/post-img-5.jpg" />
                            </div>
                            <div className="post-icons">
                                <i className="far fa-comment" />
                                <i className="fas fa-retweet" />
                                <i className="far fa-heart" />
                                <i className="fas fa-share-alt" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* WHats trending */}
                <div className="follow">
                    <h3 style={{ fontWeight: "bolder" }} className="follow-heading">Who to follow</h3>

                    <div className="follow-user">
                        <div className="follow-user-img">
                            <img alt="" src="/images/1.jpeg" />
                        </div>
                        <div className="follow-user-info">
                            <h4>Ann smith</h4>
                            <p>@annsmith</p>
                        </div>
                        <button type="button" className="follow-btn">Follow</button>
                    </div>

                    <div className="follow-user">
                        <div className="follow-user-img">
                            <img alt="" src="/images/2.jpeg" />
                        </div>
                        <div className="follow-user-info">
                            <h4>Justin trudeau</h4>
                            <p>@justintrudea</p>
                        </div>
                        <button type="button" className="follow-btn">Follow</button>
                    </div>

                    <div className="follow-user">
                        <div className="follow-user-img">
                            <img alt="" src="/images/3.jpeg" />
                        </div>
                        <div className="follow-user-info">
                            <h4>Rose Black</h4>
                            <p>@roseblack</p>
                        </div>
                        <button type="button" className="follow-btn">Follow</button>
                    </div>

                    <div className="follow-link">
                        <Link to="/feed">Show More</Link>
                    </div>

                    <footer className="follow-footer">
                        <ul>
                            <li><Link to="/feed">Terms</Link></li>
                            <li><Link to="/feed">Privacy Policy</Link></li>
                            <li><Link to="/feed">Cookies</Link></li>
                            <li><Link to="/feed">About</Link></li>
                            <li><Link to="/feed">More</Link></li>
                        </ul>
                    </footer>
                </div>
                {/* Whats trending end */}


                <div className="follow">
                    <h3 style={{ fontWeight: "bolder" }} className="follow-heading">Who to follow</h3>

                    <div className="follow-user">
                        <div className="follow-user-img">
                            <img alt="" src="/images/1.jpeg" />
                        </div>
                        <div className="follow-user-info">
                            <h4>Ann smith</h4>
                            <p>@annsmith</p>
                        </div>
                        <button type="button" className="follow-btn">Follow</button>
                    </div>

                    <div className="follow-user">
                        <div className="follow-user-img">
                            <img alt="" src="/images/2.jpeg" />
                        </div>
                        <div className="follow-user-info">
                            <h4>Justin trudeau</h4>
                            <p>@justintrudea</p>
                        </div>
                        <button type="button" className="follow-btn">Follow</button>
                    </div>

                    <div className="follow-user">
                        <div className="follow-user-img">
                            <img alt="" src="/images/3.jpeg" />
                        </div>
                        <div className="follow-user-info">
                            <h4>Rose Black</h4>
                            <p>@roseblack</p>
                        </div>
                        <button type="button" className="follow-btn">Follow</button>
                    </div>

                    <div className="follow-link">
                        <Link to="/feed">Show More</Link>
                    </div>

                    <footer className="follow-footer">
                        <ul>
                            <li><Link to="/feed">Terms</Link></li>
                            <li><Link to="/feed">Privacy Policy</Link></li>
                            <li><Link to="/feed">Cookies</Link></li>
                            <li><Link to="/feed">About</Link></li>
                            <li><Link to="/feed">More</Link></li>
                        </ul>
                    </footer>
                </div>

            </div>
            {/* end of feeds content */}
        </section >
    )
}

export default NewsFeed
