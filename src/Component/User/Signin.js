import React from 'react'

function Signin(props) {
    return (
        <div className="login_page">
            {/* Login Page Starts here */}
            <div className="login">
                <div className="login_content">
                    <h2> Login To Twitter </h2>
                    <form>
                        <input type="text" placeholder="Phone, email, or Username"></input>

                        <input type="password" placeholder="Password"></input>

                        <button type="button" className="login_form_btn"></button>
                    </form>
                </div>
            </div>
            {/* Login Page ends Here */}

        </div>

    )
}

export default Signin
