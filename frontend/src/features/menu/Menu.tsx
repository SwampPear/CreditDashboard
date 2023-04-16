import styles from './Menu.module.css'
import { ArrowsFullscreen, Boxes, CalendarWeek, Question } from 'react-bootstrap-icons'
import { useAppSelector } from '../../app/hooks'
import { selectColorTheme, ColorTheme } from '../colorThemeSettings/ColorThemeSettingsSlice'


const Menu = () => {
  const colorTheme = useAppSelector(selectColorTheme)

  /**
   * Returns proper class name for background for currently selected color theme.
   * @param colorTheme - the current color theme
   * @returns class name of color theme for this element
   */
  const routeBGColor = (colorTheme: ColorTheme) => {
    switch(colorTheme) {
      case ColorTheme.LIGHT:
        return styles.bgLight
      case ColorTheme.OPAL:
        return styles.bgOpal
    }
  }

  /**
   * Returns proper class name for buttons for currently selected color theme.
   * @param colorTheme - the current color theme
   * @returns class name of color theme for this element
   */
  const routeButtonColor = (colorTheme: ColorTheme) => {
    switch(colorTheme) {
      case ColorTheme.LIGHT:
        return styles.buttonLight
      case ColorTheme.OPAL:
        return styles.buttonOpal
    }
  }

  return (
    <div className={`${styles.wrapper} ${routeBGColor(colorTheme)}`}>
      <div className={styles.container}>
        <button className={`${styles.button} ${routeButtonColor(colorTheme)}`}>
          <Boxes className={styles.icon}/>
        </button>
        <button className={`${styles.button} ${routeButtonColor(colorTheme)}`}>
          <CalendarWeek className={styles.icon}/>
        </button>
        <button className={`${styles.button} ${routeButtonColor(colorTheme)}`}>
          <Question className={styles.icon}/>
        </button>
        <button className={`${styles.button} ${routeButtonColor(colorTheme)}`}>
          <ArrowsFullscreen className={styles.icon}/>
        </button>
      </div>
    </div>
  )
}

export default Menu