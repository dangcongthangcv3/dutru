import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { loginActionApi } from '../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';


export default function Login() {
    const dispatch = useDispatch()
    const frmLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().required("Email cannot be blank!").email("Email is invalid!"),
            password: yup.string().required("Password cannot be blank!").min(8, "Password must contain between 8 and 32 characters").max(32, "Password must contain between 8 and 32 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character"),
        }),
        onSubmit: (values) => {
            const action = loginActionApi(values);
            dispatch(action);
        }
    })
    return (
        <div className='login'>
            <div className='container'>
                <div className="login__body">
                    <h3>Login</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '25px 0px 0px 0px' }}>
                        <form onSubmit={frmLogin.handleSubmit}>
                            <div className='email p-3'>
                                <label className='form-label' htmlFor="email">Email</label> <br />
                                <input id='email' name='email' className='form-control' onInput={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
                                {frmLogin.errors.email && <p className='alert alert-danger'>{frmLogin.errors.email}</p>}
                            </div>
                            <div className='password p-3'>
                                <label className='form-label' htmlFor="password">Password</label> <br />
                                <input id='password' name='password' type='password' className='form-control' onInput={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
                                {frmLogin.errors.password && <p className='alert alert-danger'>{frmLogin.errors.password}</p>}
                            </div>
                            <div>
                                <button className='submit' type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
