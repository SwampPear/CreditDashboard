import styles from './Content.module.css'
import { useState, useEffect } from 'react'
import { Layout } from 'antd'
import Charts from '../charts/Charts'
import { apiResponse } from '../../app/types'


const API_ENDPOINT = 'https://umcs1mrbkf.execute-api.us-west-2.amazonaws.com/Master'


const Content = () => {
  const [data, setData] = useState<apiResponse>()
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = () => {
      fetch(`${API_ENDPOINT}/getdata`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(JSON.parse(data.body))
      })
      .catch(error => {
        setError(true)
      })
    }

    fetchData()
  }, [])

  const renderLoading = () => {
    return <div className={styles.message}>Loading...</div>
  }

  const renderGraphs = () => {
    return (
      <Charts data={data?.data}/>
    )
  }

  const renderError = () => {
    return <div className={styles.message}>Error loading data.</div>
  }

  return (
    <Layout.Content className={styles.content}>
      <div className={styles.container}>
        <h1 className={styles.containerH1}>Dashboard</h1>
        <h2 className={styles.containerH2}>Performance Data</h2>
        {error ? renderError() : !data ? renderLoading() : renderGraphs()}
      </div>
    </Layout.Content>
  )
}

export default Content