import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Rotas from './config/Rotas'
import GlobablConfig from './config/Global'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    
  }, [])

  return (    
    <Router>
      <div className="container-fluid">
        <div className="row">        

          <header style={{color:'white'}} className="col-12 navbar navbar-dark bg-primary justify-content-between">
            <span>
              Menu
            </span>
            <span>
              {GlobablConfig.AppName}
            </span>
            <span>
              User
            </span>
          </header>   

          {/* <div className="col-2">       
            <ul className="nav nav-pills flex-column my-3">
              {
                Rotas.map(
                  (rota) => <li className="nav-item">
                    <NavLink 
                      exact={true} 
                      activeClassName='active' 
                      className="nav-link"
                      to={rota.path}>
                        {rota.label}
                      </NavLink>
                  </li>   
                )
              }
            </ul>
          </div> */}          

          <nav aria-label="breadcrumb" className="col-12 pt-3">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>

          <Switch className="col-12">
            {
              Rotas.map(
                (rota) => <Route exact path={rota.path}>
                    {
                      React.createElement(rota.view)
                    }
                </Route>
              )
            }
          </Switch> 

        </div>
      </div>
    </Router>    
  );
}

export default App;
