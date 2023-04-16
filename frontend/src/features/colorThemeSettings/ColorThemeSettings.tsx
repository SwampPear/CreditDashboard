import styles from './ColorThemeSettings.module.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectColorTheme, toggle, ColorTheme } from './ColorThemeSettingsSlice'
import { Radio } from 'antd'

const ColorThemeSettings = () => {
  const dispatch = useAppDispatch()
  const colorTheme = useAppSelector(selectColorTheme)

  return (
    <Radio.Group defaultValue="light">
      <Radio.Button 
        value="light"
        onClick={() => dispatch(toggle(ColorTheme.LIGHT))}
      >
        Light
      </Radio.Button>
      <Radio.Button 
        value="opal"
        onClick={() => dispatch(toggle(ColorTheme.OPAL))}
      >
        Opal
      </Radio.Button>
    </Radio.Group>
  )
}

export default ColorThemeSettings