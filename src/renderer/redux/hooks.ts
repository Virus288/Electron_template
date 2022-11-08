import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { MainDispatch, RootMainState } from '../store/types';

/**
 * UseDispatch function with proper interfaces for redux store. That way you can simply create additional store, separated from this one
 */
export const useMainDispatch = (): MainDispatch => useDispatch<MainDispatch>();

/**
 * useSelector function with proper interfaces for redux store. That way you can simply create additional store, separated from this one
 */
export const useMainSelector: TypedUseSelectorHook<RootMainState> = useSelector;
