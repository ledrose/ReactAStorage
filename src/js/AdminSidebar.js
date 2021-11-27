import React from 'react'
import '../css/adminSidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminFiles from './AdminFiles';

var data = [
    {id: 1, whenAdd: '27/11/2021', whoAdd: 'alili'},
    {id: 2, whenAdd: '27/11/2021', whoAdd: 'alili'},
    {id: 3, whenAdd: '27/11/2021', whoAdd: 'alili'},
    {id: 4, whenAdd: '27/11/2021', whoAdd: 'alili'},
    {id: 5, whenAdd: '27/11/2021', whoAdd: 'alili'},
    {id: 6, whenAdd: '27/11/2021', whoAdd: 'alili'},
    {id: 7, whenAdd: '27/11/2021', whoAdd: 'alili'},
    {id: 8, whenAdd: '27/11/2021', whoAdd: 'alili'},
    {id: 9, whenAdd: '27/11/2021', whoAdd: 'alili'},
    {id: 10, whenAdd: '27/11/2021', whoAdd: 'alili'},
    {id: 11, whenAdd: '27/11/2021', whoAdd: 'alili'},
    {id: 12, whenAdd: '27/11/2021', whoAdd: 'alili'}
  ];

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
                <AdminFiles data={data}/>
            </div>
        </div>
    );
}

export default AdminSidebar