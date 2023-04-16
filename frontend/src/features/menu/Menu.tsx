import styles from './Menu.module.css'
import { ArrowsFullscreen, Boxes, CalendarWeek, Question } from 'react-bootstrap-icons'

import { useAppSelector } from '../../app/hooks'
import { selectColorTheme, ColorTheme } from '../colorThemeSettings/ColorThemeSettingsSlice'


const Menu = () => {
  const colorTheme = useAppSelector(selectColorTheme)

  const routeColor = (colorTheme: ColorTheme) => {
    switch(colorTheme) {
      case ColorTheme.LIGHT:
        return styles.bgLight
      case ColorTheme.OPAL:
        return styles.bgOpal
    }
  }

  return (
    <div className={`${styles.wrapper} ${routeColor(colorTheme)}`}>
      <div className={styles.container}>
        <button className={styles.button}>
          <Boxes className={styles.icon}/>
        </button>
        <button className={styles.button}>
          <CalendarWeek className={styles.icon}/>
        </button>
        <button className={styles.button}>
          <Question className={styles.icon}/>
        </button>
        <button className={styles.button}>
          <ArrowsFullscreen className={styles.icon}/>
        </button>
      </div>
    </div>
  )
}

export default Menu