import { useState, useEffect } from 'react'
import styles from './Content.module.css'
import { Layout, Space } from 'antd'
import PieChart from '../pieChart/PieChart'
import { apiData } from '../../app/types'


const Content = () => {
  const [data, setData] = useState<apiData>()

  const fetchData = () => {
    fetch('https://umcs1mrbkf.execute-api.us-west-2.amazonaws.com/Master/getdata')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setData(JSON.parse(data.body))
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderGraphs = () => {
    return (
      <PieChart data={data}/>
    )
  }

  const renderError = () => {
    return (
      <></>
    )
  }

  return (
    <Layout.Content className={styles.content}>
      <div className={styles.container}>
        <h1 className={styles.containerH1}>Data</h1>
        <h2 className={styles.containerH2}>This will be data</h2>
        {data?.isSuccess ? renderGraphs() : renderError()}
      </div>
    </Layout.Content>
  )
}

export default Content