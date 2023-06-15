import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'


export default function Login() {
    const frmLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        }
    })
    return (
        <div className='login'>
            <div className='container'>
                <form >
                    <div className="login__body">
                        <h3>Login</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '25px 0px 0px 0px' }}>
                            <form  >
                                <div className='email p-3'>
                                    <label className='form-label' htmlFor="email">Email</label> <br />
                                    <input id='email' name='email' className='form-control' onInput={frmLogin.handleChange} />
                                </div>
                                <div className='password p-3'>
                                    <label className='form-label' htmlFor="password">Password</label> <br />
                                    <input id='password' name='password' className='form-control' onInput={frmLogin.handleChange} />
                                </div>
                                <div>
                                    <button className='submit' type='submit'>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
