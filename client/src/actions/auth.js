
///////////////////////////////// Imports //////////////////////////////////////////

import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


///////////////////////////////// Sign in action //////////////////////////////////////////

export const signin = (formData , history)=> async (dispatch) =>{

    try {

        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        history.push('/');

        
    } catch (error) {
        console.log(error);
        
    }

}

///////////////////////////////// Sign up action //////////////////////////////////////////

export const signup = (formData , history)=> async (dispatch) =>{

    try {

        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        history.push('/');

        
    } catch (error) {
        console.log(error)
        
    }

}