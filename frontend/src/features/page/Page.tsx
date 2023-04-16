import styles from './Page.module.css'
import Menu from '../menu/Menu'
import Header from '../header/Header'
import Content from '../content/Content'


const Page = () => {
  return (
    <section className={styles.main}>
      <Menu/>
      <div className={styles.content}>
        <Header/>
        <Content/>
      </div>
    </section>
  )
}

export default Page