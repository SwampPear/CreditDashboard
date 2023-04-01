import styles from './Page.module.css'
import { Layout, Space } from 'antd'
import Header from '../header/Header'
import Content from '../content/Content'


const Page = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Layout className={styles.layout}>
        <Header/>
        <Content/>
      </Layout>
    </Space>
  )
}

export default Page