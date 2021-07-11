import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Reason for Hooks
// While it's possible to import the RootState and AppDispatch types into each component,
// it's better to create typed versions of the useDispatch and useSelector hooks for usage in your application.
// This is important for a couple reasons:

// Usage
// Use throughout your app instead of plain `useDispatch` and `useSelector`

// For useSelector, it saves you the need to type (state: RootState) every time
export const useAppDispatch = () => useDispatch<AppDispatch>();

// For useDispatch, the default Dispatch type does not know about thunks. In order to correctly dispatch thunks,
// you need to use the specific customized AppDispatch type from the store that includes the thunk middleware types,
// and use that with useDispatch. Adding a pre-typed useDispatch hook keeps you from forgetting to import AppDispatch where it's needed.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;