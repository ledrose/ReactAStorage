import React from 'react'
import '../css/adminSidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';

export default class AdminSidebar extends React.Component {
      render() {
        return (
            <div className="adminContent">
                <aside className="sidebar d-none d-md-block" ref={this.myInput}>
                    <ul className="sidebar__menu">
                        <li><a href='/admin/files' id = "files">Библиотека</a></li>
                        <li><a href='/admin/users' id = "users">Пользователи</a></li>
                        <li><a href='/admin/events' id = "events">События</a></li>
                        <li><a href='/admin/logs' id = "logs">Логи</a></li>
                        <li><a href='/admin/roles' id = "roles">Роли</a></li>
                    </ul>
                </aside>
                <div className = "container-for-content">
                    <Outlet />
                </div>
            </div>
        );
    }
}


/*  <AdminFiles data={data}/> */