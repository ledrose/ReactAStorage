import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

import Main from './Main';
import Login from './Login';
import AdminWelcome from './AdminWelcome';
import AdminContentBase from './AdminContentBase';


function App() {
  
  return (
          <>
          <Router>
            <Routes>
              <Route path="/"  element={<Main />}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/admin" element={<AdminWelcome/>}>
              </Route>
            </Routes>
          </Router>
        </>
  )
}

export default App;

/* 
 <Routes>
                <Route path="/"  element={<Navbar />}>
                    <Main />
                </Route>
                <Route path="/login" element={<Navbar />}>
                  <Login/>
                </Route>
                <Route path="/admin" element={<AdminWelcome />}>
                </Route>
              </Routes>

<Route path="files" element={<Phone />} />
                    <Route path="log" element={<Tablet />} /> */