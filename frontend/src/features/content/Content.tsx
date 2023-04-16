import styles from './Content.module.css'
import { useState, useEffect } from 'react'
import { Layout } from 'antd'
import Charts from '../charts/Charts'
import { APIResponse } from '../../app/types'


const API_ENDPOINT = 'https://umcs1mrbkf.execute-api.us-west-2.amazonaws.com/Master'


const Content = () => {
  const [data, setData] = useState<APIResponse>()
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    /**
     * Fetches data from API and sets data state for this component.
     */
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

  /**
   * Renders a loading indicator when data is being loaded.
   * @returns loading element
   */
  const renderLoading = () => {
    return <div className={styles.message}>Loading...</div>
  }

  /**
   * Renders graphs when data is loaded from API.
   * @returns graphs
   */
  const renderGraphs = () => {
    return (
      <Charts data={data?.data}/>
    )
  }

  /**
   * Renders an error indicator if there was an error loading in the data.
   * @returns error element
   */
  const renderError = () => {
    return <div className={styles.message}>Error loading data.</div>
  }

  return (
    <Layout.Content className={styles.content}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Dashboard</h1>
        <h2 className={styles.h2}>Performance Data</h2>
        {error ? renderError() : !data ? renderLoading() : renderGraphs()}
      </div>
    </Layout.Content>
  )
}

export default Content