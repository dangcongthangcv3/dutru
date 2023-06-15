import React from 'react'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function HomeTemplate() {
    return (
        <div>
            <Header />
            <main style={{ minHeight: '650px' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
