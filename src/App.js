import React from 'react';
import { navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {

    function searchQuery() {
      navigate ('https://google.com/')
    }
    
    function perfect(){ 
      navigate('https://perfects.engineering')
    }
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Gmail</li>
          <li>Images</li>
          <li><i className="fa fa-th"></i></li>
          <li className="b">b</li>
        </ul>
      </nav>
      <div className="section">
        <h1><span className="blue">G</span><span className="red">o</span><span className="yellow">o</span>
        <span className="blue">g</span><span className="green">l</span><span className="red">e</span></h1>
        <div className="input">
          <FontAwesomeIcon icon={faSearch} className="search"/>
          <input type="text"  placeholder="Search Google or type a url" onChange={e =>(e.target.value)}/>
          <FontAwesomeIcon icon={faMicrophone} className="microphone"/>
        </div>
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
    </div>
  );
}

export default App;
