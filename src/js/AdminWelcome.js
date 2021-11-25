import React from 'react'

import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

function AdminWelcome() {
    return (
        <>
            <AdminNavbar/>
            <AdminSidebar/>
            <Outlet />
        </>
    );
}

export default AdminWelcome