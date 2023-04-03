import { useState, useEffect } from 'react'
import styles from './Content.module.css'
import { Layout, Row, Col, Select } from 'antd'
import Charts from '../charts/Charts'
import { apiData } from '../../app/types'


const Content = () => {
  const [data, setData] = useState<apiData>()

  const fetchData = () => {
    fetch('https://umcs1mrbkf.execute-api.us-west-2.amazonaws.com/Master/getdata')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      setData(JSON.parse(data.body))
    })
    .catch(error => {
      console.log('fetch data failed', error);
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderGraphs = () => {
    return (
      <Charts data={data?.data}/>
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
        <h1 className={styles.containerH1}>Dashboard</h1>
        <h2 className={styles.containerH2}>Performance Data</h2>
        {data?.isSuccess ? renderGraphs() : renderError()}
      </div>
    </Layout.Content>
  )
}

export default Content