import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Profile() {
    if (!localStorage.getItem('token')) {
        alert('Phải đăng nhập')
        return <Navigate to="Login.jsx" />
    }
    return <div>
        Profile
    </div>

}
