import { configureStore } from '@reduxjs/toolkit';
import popup from '../redux/reducers/popup';

const mainStore = configureStore({
  reducer: {
    popup,
  },
});

export default mainStore;
