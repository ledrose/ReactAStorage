import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/adminNavbar.css';

function AdminNavbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
            <div className="container-fluid container-navbar-admin" id="navbarAdmin">
                <div className="content-navbar-admin d-flex justify-content-between align-items-center">
                    <a href="../" className="navbar-admin__back">AStorage</a>
                    <div className='menu-icon d-flex d-md-none' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu-admin active' : 'nav-menu-admin'}>
                        <a href="#" className="nav-menu-account ul-item" id="account"><i class="fas fa-user"></i> YourName </a>
                    </ul>
                </div>
            </div>
    );
}

export default AdminNavbar