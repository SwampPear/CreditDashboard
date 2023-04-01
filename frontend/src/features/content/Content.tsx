import { useState, useEffect } from 'react'
import styles from './Content.module.css'
import { Layout, Space } from 'antd'
import DemoPie from '../pieChart/PieChart'


const Content = () => {
  return (
    <Layout.Content className={styles.content}>
      <div className={styles.container}>
        <h1 className={styles.containerH1}>Data</h1>
        <h2 className={styles.containerH2}>This will be data</h2>
        <DemoPie/>
      </div>
    </Layout.Content>
  )
}

export default Content