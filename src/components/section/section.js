import React from 'react';
import { useHistory } from 'react-router-dom';
import './section.css';

function Section() {
    const query = useHistory();

    const searchQuery = () => query.push(`https://cors-anywhere.herokuapp.com/https://google.com/search?q=${query}`);
    
    const perfect = () => query.push(`https://perfects.engineering`)
    return (
        <div className="section">
            <h1><span className="blue">G</span><span className="red">o</span><span className="yellow">o</span>
            <span className="blue">g</span><span className="green">l</span><span className="red">e</span></h1>
            <input type="text"  value={query}/><i className="fa fa-microphone"></i>
            <div className="buttons">
                <button onClick={searchQuery}>Google Search</button>
                <button onClick={perfect}>I'm feeling lucky</button>
            </div>
            <div className="section-link">
            <p>Google offered in:
                <span className="link">Hausa</span> <span className="link">Igbo</span> 
                <span className="link">Èdè Yorùbá</span><span className="link">Nigerian Pidgin</span>
            </p>
            </div>
        </div>
    )
}

export default Section;