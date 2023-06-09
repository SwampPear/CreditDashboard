import styles from './Widget.module.css'
import { useAppSelector } from '../../app/hooks'
import { selectColorTheme, ColorTheme } from '../colorThemeSettings/ColorThemeSettingsSlice'


interface IWidgetProps {
  header: string
  content: string | number
}


const Widget = (props: IWidgetProps) => {
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
    <div className={`${styles.widget} ${routeColor(colorTheme)}`}>
      <div className={styles.header}>
        {props.header}
      </div>
      <div className={styles.content}>
        {props.content}
      </div>
    </div>
  )
}

export default Widget