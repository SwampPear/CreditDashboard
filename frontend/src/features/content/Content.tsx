import { useState, useEffect } from 'react'
import styles from './Content.module.css'
import { Layout, Row, Col } from 'antd'
import Chart from '../chart/Chart'
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
      <div className={styles.chartContainer}>
        <Row gutter={[24, 24]}>
          <Col className={styles.halfCol}>
            <Chart className={styles.chart} type='Pie' data={data?.data}/>
          </Col>
          <Col className={styles.halfCol}>
            <Chart className={styles.chart} type='RadialBar' data={data?.data}/>
          </Col>
        </Row>
        <Row>
          <Chart className={styles.chart} type='Column' data={data?.data}/>
        </Row>  
      </div>
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
        <h1 className={styles.containerH1}>Performance Data</h1>
        <h2 className={styles.containerH2}>Last Year</h2>
        {data?.isSuccess ? renderGraphs() : renderError()}
      </div>
    </Layout.Content>
  )
}

export default Content