import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div>
               <p>Nigeria</p> 
            </div>
            <div className="footer-1">
            <div className="Advertising">
                <p>Advertising</p>
                <p>Business</p>
                <p>About</p>
                <p>How Search Works</p>
            </div>
            <div className="Privacy">
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;