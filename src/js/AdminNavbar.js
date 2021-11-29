import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/adminNavbar.css';
import '../css/adminNavbar-responsive.css';

function AdminNavbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
            <div className="container-fluid container-navbar-admin" id="navbarAdmin">
                <div className="content-navbar-admin d-flex justify-content-between align-items-center">
                    <a href="../" className="navbar-admin__back">AStorage</a>
                    <div className = 'd-none d-md-block'>
                        <a href="/account" className="nav-menu-account ul-item" id="account"><i class="fas fa-user"></i> Аккаунт </a>
                    </div>
                    <div className = 'd-block d-md-none'>
                        <div className='menu-icon d-flex' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                        </div>
                        <ul className={click ? 'nav-menu-admin active' : 'nav-menu-admin'}>
                            <li><a href="/account" className="nav-menu-li ul-item" id="account"><i class="fas fa-user"></i> Аккаунт </a></li>
                            <li><a href='/admin/files' className="nav-menu-li ul-item" id = "files">Библиотека</a></li>
                            <li><a href='/admin/users' className="nav-menu-li ul-item" id = "users">Пользователи</a></li>
                            <li><a href='/admin/events' className="nav-menu-li ul-item" id = "events">События</a></li>
                            <li><a href='/admin/logs' className="nav-menu-li ul-item" id = "logs">Логи</a></li>
                            <li><a href='/admin/roles' className="nav-menu-li ul-item" id = "roles">Роли</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default AdminNavbar