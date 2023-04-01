import { useState, useEffect } from 'react'
import styles from './Content.module.css'
import { Layout, Space } from 'antd'
import PieChart from '../pieChart/PieChart'


type apiData = {
  isSuccess: boolean
  data: {
    XData: string[],
    YData: number[],
    Source: [],
    Target: [],
    Value: []
  }[],
  systemCode: string,
  message: string,
  details: string
  timestamp: string
}


const Content = () => {
  const [data, setData] = useState<apiData>()

  const fetchData = () => {
    fetch('https://umcs1mrbkf.execute-api.us-west-2.amazonaws.com/Master/getdata')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setData(data)
    })
  }

  useEffect(() => {
    fetchData()
    console.log(JSON.stringify(data))
  }, [])

  const renderGraphs = () => {
    return (
      <PieChart/>
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
        <PieChart/>
      </div>
    </Layout.Content>
  )
}

export default Content