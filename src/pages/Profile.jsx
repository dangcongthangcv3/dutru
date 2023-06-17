import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileActionApi } from '../redux/reducers/userReducer'

const Profile = (props) => {
    const { userProfile } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const getProfileApi = () => {
        const action = getProfileActionApi();
        dispatch(action)
    }
    useEffect(() => {
        getProfileApi();
    }, [])
    return (
        <div className='profile'>
            <div className="container">

                <h3 style={{ textAlign: 'center' }}>Thông tin cá nhân </h3>
                <div className='row'>
                    <div className="col-md-3">
                        <img src="./img/download1.png" alt="" />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='email p-3'>
                                    <label className='form-label' htmlFor="email">Email</label> <br />
                                    <input id='email' name='email' className='form-control' value={userProfile.email} />
                                </div>
                                <div className='phone p-3'>
                                    <label className='form-label' htmlFor="phone">Phone</label> <br />
                                    <input id='phone' name='phone' className='form-control' value={userProfile.phone} />
                                </div>
                                <div className='form-group p-3'>
                                    <p>Gender</p>
                                    <input name='gender' id='gender1' value={true} type='radio' className='form-check-input' />Male
                                    <input name='gender' id='gender2' value={false} type='radio' className='form-check-input' />Female
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='name p-3'>
                                    <label className='form-label' htmlFor="name">Name</label> <br />
                                    <input id='name' name='name' className='form-control' value={userProfile.name} />
                                </div>
                                <div className='password p-3'>
                                    <label className='form-label' htmlFor="password">Password</label> <br />
                                    <input id='passwordProfile' name='passwordProfile' className='form-control' />
                                </div>
                                <div className='form-group p-3'>
                                    <button type='submit' className='submit'>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile