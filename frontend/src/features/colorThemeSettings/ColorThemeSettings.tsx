import { useAppDispatch } from '../../app/hooks'
import { toggle, ColorTheme } from './ColorThemeSettingsSlice'
import { Radio } from 'antd'


const ColorThemeSettings = () => {
  const dispatch = useAppDispatch()

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