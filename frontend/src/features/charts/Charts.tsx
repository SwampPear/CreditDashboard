import styles from './Charts.module.css'
import { Row, Col, Select } from 'antd'
import Chart from './chart/Chart'
import { apiData } from '../../app/types'
import { useState, useEffect } from 'react'


interface IChartsProps {
  data?: apiData['data']
}

const Charts = (props: IChartsProps) => {
  const [data, setData] = useState<{
    Name: string, 
    XData: string[], 
    YData: number[],
    Source: [],
    Target: [],
    Value: []
  }>()

  useEffect(() => {
    if (props.data) {
      setData(props.data?.[0])
    }

  }, [props.data])

  const handleChange = (value: string) => {
    if (props.data) {

      for (let i = 0; i < props.data?.length; i++) {
        if (props.data?.[i].Name === value) {
          setData(props.data?.[i])
        }
      }

      console.log(value)
    }
  }

  return (
    <>
      <div className={styles.chartContainer}>
        <Row gutter={[24, 24]}>
          <Col className={styles.col}>
            <Chart type='Pie' data={props.data}/>
          </Col>
          <Col className={styles.col}>
            <Chart type='RadialBar' data={props.data}/>
          </Col>
        </Row>
        <Row>
          <Chart type='Column' data={props.data}/>
        </Row>
      </div>
    </>
    
  )
}

export default Charts