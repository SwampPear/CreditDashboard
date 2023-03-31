import React from 'react'
import { Layout, Space } from 'antd'
import Header from './features/header/Header';
import Content from './features/content/Content';
import Background from './features/background/Background';


const App: React.FC = () => {
  return (
    <>
      <Background/>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
          <Header/>
          <Content/>
        </Layout>
      </Space>
    </>
    
  )
}

export default App
