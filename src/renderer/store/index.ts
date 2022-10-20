import { configureStore } from '@reduxjs/toolkit';
import popup from '../redux/reducers/popup';
import settings from '../redux/reducers/settings';

const mainStore = configureStore({
  reducer: {
    popup,
    settings,
  },
});

export default mainStore;
