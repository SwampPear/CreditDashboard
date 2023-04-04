import styles from './Page.module.css'

import Menu from '../menu/Menu'
import Header from '../header/Header'
import Content from '../content/Content'




const Page = () => {
  return (
    <section className={styles.mainSection}>
      <Menu/>
      <div className={styles.contentWrapper}>
        <Header/>
        <Content/>
      </div>
    </section>
  )
}

export default Page