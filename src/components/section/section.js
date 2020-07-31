import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import './section.css';

function Section() {
    return (
        <div>
            <h1><span className="blue">G</span><span className="red">o</span><span className="yellow">o</span>
            <span className="blue">g</span><span className="green">l</span><span className="red">e</span></h1>
            <input type="text" />
            <div className="buttons">
                <button>Google Search</button>
                <button>I'm feeling lucky</button>
            </div>
            <p>Google offered in: <Link to="#">Hausa</Link> <Link to="#">Igbo</Link> 
            <Link to="#">Èdè Yorùbá</Link><Link to="#">Nigerian Pidgin</Link></p>
        </div>
    )
}

export default Section;