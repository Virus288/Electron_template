import { configureStore } from '@reduxjs/toolkit';
import popup from '../redux/reducers/popup';
import settings from '../redux/reducers/settings';
import loading from '../redux/reducers/loading';
import communicator from '../redux/reducers/communicator';

const mainStore = configureStore({
  reducer: {
    popup,
    settings,
    loading,
    communicator,
  },
});

export default mainStore;
