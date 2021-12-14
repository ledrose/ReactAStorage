import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';


function AdminWelcome() {
    return (
        <>
            <AdminNavbar/>
            <AdminSidebar/>
        </>
    );
}

export default AdminWelcome