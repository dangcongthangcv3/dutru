import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { USER_LOGIN, clearStorage } from '../../util/config'
export default function Header() {
    const { userLogin } = useSelector(state => state.userReducer)
    const renderLoginLink = () => {
        if (userLogin.email !== '') {
            return <>
            <NavLink to='/profile' className='text-white mx-2 nav-link'>{userLogin.email}</NavLink>
            <span style={{cursor:'pointer'}} className='text-white mx-2 nav-link' onClick={()=>{
                clearStorage(USER_LOGIN);
                window.location.reload()
            }}>Logout</span>
            </>
        }
        return<>
            <NavLink to='/login' className='text-white mx-2 nav-link'>Login</NavLink>
        
            <NavLink to='/register' className='text-white mx-2 nav-link'>Register</NavLink>
        </>
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
                            {renderLoginLink()}
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
                    </ul>
                </div>
            </nav>
        </div>
    )
}