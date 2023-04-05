import styles from './Widget.module.css'


interface IWidgetProps {
  header: string
  content: string | number
}


const Widget = (props: IWidgetProps) => {
  return (
    <div className={styles.widget}>
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