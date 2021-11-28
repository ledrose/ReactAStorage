import React from 'react'
import '../css/adminSidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminFiles from './AdminFiles';
import { Outlet } from 'react-router-dom';

function AdminSidebar() {
    return (
        <div className="adminContent">
            <aside className="sidebar">
                <ul className="sidebar__menu">
                    <li><a href='/admin/files' id = "files">Библиотека</a></li>
                    <li><a href='/admin/users' id = "users">Пользователи</a></li>
                    <li><a href='/admin/events' id = "events">События</a></li>
                    <li><a href='/admin/logs' id = "logs">Логи</a></li>
                    <li><a href='/admin/roles' id = "roles">Роли</a></li>
                </ul>
            </aside>
            <div className = "container-for-content">
                <Outlet/>
            </div>
        </div>
    );
}

export default AdminSidebar

/*  <AdminFiles data={data}/> */