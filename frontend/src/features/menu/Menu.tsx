import styles from './Menu.module.css'
import { ArrowsFullscreen, Boxes, CalendarWeek, Question } from 'react-bootstrap-icons'


const Menu = () => {
  return (
    <div className={styles.wrapper}>
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