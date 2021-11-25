import React from 'react'
import '../css/adminSidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminContentBase from './AdminContentBase';

function AdminSidebar() {
    return (
        <div className="adminContent">
            <aside className="sidebar">
                <ul className="sidebar__menu">
                    <li><a href='/files' id = "files">Библиотека</a></li>
                    <li><a href='/users' id = "users">Пользователи</a></li>
                    <li><a href='/events' id = "events">События</a></li>
                    <li><a href='/logs' id = "logs">Логи</a></li>
                    <li><a href='/roles' id = "roles">Роли</a></li>
                </ul>
            </aside>
            <div className = "container-for-content">
                <AdminContentBase/>
            </div>
        </div>
    );
}

export default AdminSidebar