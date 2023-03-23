import {createAsyncThunk} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import axiosIntance from '../utils/axiosIntance';
// import {login} from '../reducers/AuthReducer';
interface IProps {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  'Auth/login',
  async ({email, password}: IProps, {rejectWithValue}) => {
    try {
      const {data} = await axios.get(' http://localhost:3000/users/register', {
        data: {email, password},
      });
      if (!data) {
        // th;
      }
    } catch (error) {}

    // console.log('here');
    // try {
    //   const response = await fetch('https://api.example.com/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({username, password}),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     return data;
    //   } else {
    //     throw new Error(data.message);
    //   }
    // } catch (error) {
    //   return rejectWithValue(error.message);
    // }
  },
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (payload: IProps) => {
    try {
      const res = await axiosIntance.post('register/users', payload);
      if (!res.data) {
        throw new Error('Please try again');
      }
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);
