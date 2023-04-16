import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


export enum ColorTheme {
  LIGHT,
  DARK,
  OPAL
}

export interface ColorThemeSettingsState {
  colorTheme: ColorTheme
}

const initialState: ColorThemeSettingsState = {
  colorTheme: ColorTheme.LIGHT
}

export const colorThemeSettingsSlice = createSlice({
  name: 'colorThemeSettings',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<ColorTheme>) => {
      state.colorTheme = action.payload
    }
  }
})

export const { toggle } = colorThemeSettingsSlice.actions
export const selectColorTheme = (state: RootState) => state.colorThemeSettings.colorTheme
export default colorThemeSettingsSlice.reducer