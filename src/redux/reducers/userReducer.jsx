// rxslice
import { createSlice } from '@reduxjs/toolkit'
import {USER_LOGIN, getStorageJSON, http, saveStorageJSON} from '../../util/config'

const initStateUserLogin = () => {
  let userLoginInit = {
    email: "",
    accessToken: "",
  };
  if (getStorageJSON(USER_LOGIN)) {
    userLoginInit = getStorageJSON(USER_LOGIN);
  }
  return userLoginInit;
};

const initialState = {
    userLogin: initStateUserLogin(),
    userProfile:{
      
    }
}


const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            const userLogin = action.payload;
            state.userLogin = userLogin
        }
    }
});

export const { loginAction } = userReducer.actions

export default userReducer.reducer

export const loginActionApi = (userLogin) => {
    return async (dispatch) => {
      try{
        const res = await http.post('/api/Users/signin',userLogin);
        const action = loginAction(res.data.content);
        dispatch(action);
        saveStorageJSON(USER_LOGIN, res.data.content)
      }
      catch(err){
        alert(err.reponse?.data.message);
      }
    }
  };
  