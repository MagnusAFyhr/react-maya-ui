import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import SideBar from './components/SideBar';

import Dashboard from './pages/Dashboard';
import Pools from './pages/Pools';
import MyPositions from './pages/MyPositions';
import Treasury from './pages/Treasury';

function App() {
  return (
    <div className="page">
      <Router>

        <SideBar />

        <Switch>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/pools' component={Pools}/>
          <Route path='/my-positions' component={MyPositions}/>
          <Route path='/treasury' component={Treasury}/>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;