import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { MainDispatch, RootMainState } from '../store/types';

export const useMainDispatch = (): MainDispatch => useDispatch<MainDispatch>();

export const useMainSelector: TypedUseSelectorHook<RootMainState> = useSelector;
