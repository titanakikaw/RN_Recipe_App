import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {registerUser} from '../actions/authActions';

interface User {
  email: string | null;
  id: Number | null;
}

interface AuthState {
  user: User;
  accessToken: string | null;
}

type Token = string;
const initialState: AuthState = {
  user: {email: null, id: null},
  accessToken: null,
};

const AsyncToken = async (token: Token) => {
  await AsyncStorage.setItem('accessToken', JSON.stringify(token));
};
const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const {user, accessToken} = JSON.parse(action.payload);
      // console.log(action.payload);
      state.user = {
        email: user.email,
        id: user.id,
      };
      state.accessToken = accessToken;
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, {payload}) => {
      AsyncToken(payload);
      return {
        user: {
          email: payload.user.email,
          id: payload.user.id,
        },
        accessToken: payload.accessToken,
      };
    });
  },
});

export const {login} = authReducer.actions;

export default authReducer.reducer;
