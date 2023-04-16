import styles from './Background.module.css'
import { useAppSelector } from '../../app/hooks'
import { selectColorTheme, ColorTheme } from '../colorThemeSettings/ColorThemeSettingsSlice'


const Background = () => {
  const colorTheme = useAppSelector(selectColorTheme)

  /**
   * Returns proper class name for currently selected color theme.
   * @param colorTheme - the current color theme
   * @returns class name of color theme for this element
   */
  const routeColor = (colorTheme: ColorTheme) => {
    switch(colorTheme) {
      case ColorTheme.LIGHT:
        return styles.bgLight
      case ColorTheme.OPAL:
        return styles.bgOpal
    }
  }

  return (
    <div className={`${styles.bg} ${routeColor(colorTheme)}`}/>
  )
}

export default Background