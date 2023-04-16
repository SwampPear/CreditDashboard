import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import colorThemeSettingsReducer from '../features/colorThemeSettings/ColorThemeSettingsSlice'


export const store = configureStore({
  reducer: {
    colorThemeSettings: colorThemeSettingsReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>