import mainStore from '../renderer/store';

declare global {
  interface Window {
    store: typeof mainStore;
  }
}
