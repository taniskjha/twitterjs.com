import React from 'react'
import '../Css/Signin.css'
import { Link } from 'react-router-dom'

function Signin(props) {

    return (
        <section className="login-page">
            {/* login page nav */}
            <nav className="login-page-nav">
                <ul>
                    <li className="brand">
                        <Link to="/"> Home</Link>
                    </li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Language: English</a></li>
                </ul>
            </nav>
            {/* end of login page nav */}
            {/* login */}
            <div className="login">
                <div className="login-content">
                    <h2> Log in to Twitter   <i style={{ color: '#37A1F5', }} class="fab fa-twitter"></i>   </h2>
                    <form className="login-form">
                        <input type="text" placeholder="Phone, email, or username" />
                        <input type="password" placeholder="Password" />
                        <div>
                            <button type="button" className="login-form-btn">Log In</button>
                            <input type="checkbox" className="login-form-checkbox" id="check" />
                            <label htmlFor="check">Remember me</label>
                            <a href="/">Forgot password?</a>
                        </div>
                    </form>
                </div>
                <footer className="login-footer">
                    <p>New to Twitter? <Link to="/register">Sign up now</Link></p>
                    {/* <p>
                        Already using Twirrer via text message?
              <a href="/">Activate your account</a>
                    </p> */}
                </footer>
            </div>
            {/* end of login */}
        </section>
    )
}

export default Signin
