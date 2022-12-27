import { configureStore } from '@reduxjs/toolkit';
import communicator from '../redux/reducers/communicator';
import notifications from '../redux/reducers/notifications';

const mainStore = configureStore({
  reducer: {
    communicator,
    notifications,
  },
});

export default mainStore;
