import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Header() {
    const { userLogin } = useSelector(state => state.userReduce)
    const renderLoginLink = () => {
        if (userLogin.email !== '') {
            return <NavLink to='' className='mx-2 nav-link'>Hello! {userLogin.email}</NavLink>
        }
        return <NavLink to='/login' className='mx-2 nav-link'>Login</NavLink>
    }
    return (
        <div>
            <header>
                <div className='header__container'>
                    <div className='header'>
                        <div className='trai' ><img src="./img/logobrand_1.png" alt=".." className='header__img' /></div>
                        <nav className='d-flex'>
                            <NavLink to='/search' className='text-white mx-2 nav-link'>Search</NavLink>
                            <NavLink to='/cart' className='text-white mx-2 nav-link'>Cart(1)</NavLink>
                            <NavLink to='/register' className='text-white mx-2 nav-link'>Register</NavLink>
                        </nav>
                    </div>
                </div>
            </header >

            <nav className='menu'>
                <div className="menu__container">
                    <ul>
                        <li>
                            <NavLink to='/' className='mx-2 nav-link'>Home</NavLink>
                        </li>
                        <li>
                            {renderLoginLink()}
                        </li>
                        <li>
                            <NavLink to='/register' className='mx-2 nav-link'>Register</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}