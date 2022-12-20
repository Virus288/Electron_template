import { configureStore } from '@reduxjs/toolkit';
import popup from '../redux/reducers/popup';
import communicator from '../redux/reducers/communicator';

const mainStore = configureStore({
  reducer: {
    popup,
    communicator,
  },
});

export default mainStore;
