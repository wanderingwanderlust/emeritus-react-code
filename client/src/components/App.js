import logo from '../logo.svg';
import { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'

import Navi from './Navi'
import HomePage from './HomePage'
import SearchGifs from './SearchGifs'

function App() {
  const [serverData, setServerData] = useState('');

  useEffect(() => {
    callBackendAPI()
      .then(res => setServerData(res.express ))
      .catch(err => console.log(err));
  })

    // fetching the GET route from the Express server which matches the GET route from server.js
  let callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  return (
    <div>
            <Router>
              <Navi />
              <Switch>
                <Route path='/search'>
                  <SearchGifs />
                </Route>
                <Route path='/'>
                    <HomePage />    
                </Route>
              </Switch>
            </Router>
            <div>
              <p className="App-intro">{serverData}</p>
            </div>  
    </div>
        );
}

export default App;
