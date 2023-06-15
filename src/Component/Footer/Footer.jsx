import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className='row'>
                    <div className="col-md-4">
                        <h3>GET HELP</h3>
                        <ul>
                            <li>Home</li>
                            <li>Nike</li>
                            <li>Adidas</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>SUPPORT</h3>
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Help</li>
                            <li>Phone</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>REGISTER</h3>
                        <ul>
                            <li>Register</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div >
            <div className='text-center py-3 copy'>&copy; 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải</div>
        </div>
    )
}
