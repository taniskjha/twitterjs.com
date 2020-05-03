import React from 'react'
import '../Css/Signup.css'
import { Link } from 'react-router-dom'


function Signup() {
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
                    <h2> Signup to Twitter   <i style={{ color: '#37A1F5', }} class="fab fa-twitter"></i>   </h2>
                    <form className="login-form">
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Phone or email" />
                        <input type="password" placeholder="Password" />
                        <div>
                            <button type="button" className="login-form-btn">Signup</button>
                            <input type="checkbox" className="login-form-checkbox" id="check" />
                            <label htmlFor="check">Remember me</label>
                            {/* <a href="/">Forgot password?</a> */}
                        </div>
                    </form>
                </div>
                <footer className="login-footer">
                    <p>Already Registered? <Link to="/login">Log in now</Link></p>
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

export default Signup
