import React from 'react';
import './nav.css';

function Nav() {
    return (
            <nav>
                <ul>
                    <li>Gmail</li>
                    <li>Images</li>
                    <li><i className="fa fa-th"></i></li>
                    <li className="b">b</li>
                </ul>
            </nav>
    )
}

export default Nav;