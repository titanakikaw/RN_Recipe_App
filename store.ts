import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers/rootReducer';
import {composeWithDevTools} from 'remote-redux-devtools';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: () => (args: any) => any;
}

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  enhancers: [composeWithDevTools()],
});
export type AppDispatch = typeof store.dispatch;
export default store;
