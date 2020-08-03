import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div>
               <p className="nigeria">Nigeria</p> 
            </div>
            <div className="footer-1">
            <div className="advertising">
                <p>Advertising</p>
                <p>Business</p>
                <p>About</p>
                <p>How Search Works</p>
            </div>
            <div className="privacy">
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;