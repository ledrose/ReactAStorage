import React, {useState} from 'react'

import '../css/Navbar.css';
import '../css/Navbar-responsive.css';
import {curToken} from './App'

/*
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl} from 'react-bootstrap';
*/

function Navbar() {
    const [click, setClick] = useState(false);

    return (
            <div className="container-fluid container-navbar" id="navbar">
                <div className="content-navbar d-flex justify-content-between align-items-center">
                    <a href="/" className="navbar_name">AStorage</a>
                    <div className='menu-icon d-flex d-md-none' onClick={()=>setClick(!click)}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                        

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {curToken.token==null
                        ?<a href="/login" className="nav-menu-login ul-item" id="log"> Login </a>
                        :<a href="/login" className="nav-menu-account ul-item" id="account"><i className="fas fa-user"></i> {curToken.name}</a>
                        }
                        
                       
                        <div className="navbar-search ul-item">
                            <a href="/search" className="nav-menu-login ul-item" id="log"> Search </a>

                            {/*
                            <Form className="d-flex" id="searchWin">
                                <FormControl
                                    type = "text"
                                    placeholder = "Поиск"
                                    className = "form__search"
                                >
                                </FormControl>
                            </Form>
                            */}
                            
                        </div>
                    </ul>
                </div>
            </div>
    );
}

export default Navbar