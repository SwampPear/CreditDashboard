import styles from './Page.module.css'
import { Layout, Space } from 'antd'
import Header from '../header/Header'
import Menu from '../menu/Menu'
import Content from '../content/Content'


const Page = () => {
  return (
    <Space direction='horizontal' style={{width: '100%' }}>
      <Layout className={styles.layout}>
        <Menu/>
      </Layout>
    </Space>
  )
}

export default Page