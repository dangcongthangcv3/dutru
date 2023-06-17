import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { http } from '../util/config'
import { useNavigate } from 'react-router-dom'
const Register = (props) => {
    const navigate = useNavigate()
    const registerFrm = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            phone: '',
            gender: '',
            passwordConfirm: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().required("Email cannot be blank!").email("Email is invalid!"),
            name: yup.string().required("Name cannot be blank!"),
            phone: yup.number().required("Phone number cannot be blank!"),
            password: yup.string().required("Password cannot be blank!").min(8, "Password must contain between 8 and 32 characters").max(32, "Password must contain between 8 and 32 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character"),
            passwordConfirm: yup.string().required("Please enter your password again.").oneOf([yup.ref('password')], "The confirmation password does not match")
        }),
        onSubmit: async (values) => {
            try {

                const res = await http.post('/api/Users/signup', values);
                alert(res.data?.message);
                navigate('/login')
            }
            catch (err) {
                alert(err.response.data.message)
            }
        }
    })
    return (
        <div className='container'>
            <div className="register">
                <h3>Register</h3>
                <form className='card' onSubmit={registerFrm.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className='email p-3'>
                                <label className='form-label' htmlFor="email">Email</label> <br />
                                <input name='email' id='email' className='form-control' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
                                {registerFrm.errors.email && <p className='alert alert-danger'>{registerFrm.errors.email}</p>}
                            </div>
                            <div className='password p-3'>
                                <label className='form-label' htmlFor="password">Password</label> <br />
                                <input name='password' type='password' id='password' className='form-control' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
                                {registerFrm.errors.password && <p className='alert alert-danger'>{registerFrm.errors.password}</p>}
                            </div>
                            <div className='passwordConfirm p-3'>
                                <label className='form-label' htmlFor="passwordConfirm">Password Confirm</label> <br />
                                <input name='passwordConfirm' type='password' id='passwordConfirm' className='form-control' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
                                {registerFrm.errors.passwordConfirm && <p className='alert alert-danger'>{registerFrm.errors.passwordConfirm}</p>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='name p-3'>
                                <label className='form-label' htmlFor="name">Name</label> <br />
                                <input name='name' id='name' className='form-control' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
                                {registerFrm.errors.name && <p className='alert alert-danger'>{registerFrm.errors.name}</p>}
                            </div>
                            <div className='phone p-3'>
                                <label className='form-label' htmlFor="phone">Phone</label> <br />
                                <input name='phone' id='phone' className='form-control' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
                                {registerFrm.errors.phone && <p className='alert alert-danger'>{registerFrm.errors.phone}</p>}
                            </div>
                            <div className='form-group p-3'>
                                <p>Gender</p>
                                <input name='gender' id='gender1' value={true} type='radio' className='form-check-input' onInput={registerFrm.handleChange} />Male
                                <input name='gender' id='gender2' value={false} type='radio' className='form-check-input' onInput={registerFrm.handleChange} />Female
                            </div>
                            <div className='form-group p-3'>
                                <button type='submit' className='submit' disabled={!registerFrm.isValid}>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
