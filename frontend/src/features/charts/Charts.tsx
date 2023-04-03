import styles from './Charts.module.css'
import { Row, Col, Select } from 'antd'
import Chart from './chart/Chart'
import { apiData } from '../../app/types'
import { useState, useEffect } from 'react'


interface IChartsProps {
  data?: apiData['data']
}

const Charts = (props: IChartsProps) => {
  const [selectedData, setSelectedData] = useState<string>()
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
      setSelectedData(props.data?.[0].Name)

      for (let i = 0; i < props.data?.length; i++) {
        if (props.data?.[i].Name === selectedData) {
          setData(props.data?.[i])
        }
      }
    }

  }, [props.data])

  const handleChange = (value: string) => {
    if (props.data) {
      setSelectedData(value)

      for (let i = 0; i < props.data?.length; i++) {
        if (props.data?.[i].Name === selectedData) {
          setData(props.data?.[i])
        }
      }
    }
  }

  return (
    <>
      <div className={styles.chartControlsContainer}>
        <Select
          onChange={handleChange}
          defaultValue={props.data?.[0].Name}
          options={props.data?.map((element) => {return {value: element['Name'], label: element['Name']}})}
        />
      </div>
      <div className={styles.container}>
        <Row gutter={[24, 24]}>
          <Col className={styles.col}>
            <Chart type='Pie' data={data}/>
          </Col>
          <Col className={styles.col}>
            <Chart type='RadialBar' data={data}/>
          </Col>
        </Row>
        <Row>
          <Chart type='Column' data={data}/>
        </Row>
      </div>
    </>
    
  )
}

export default Charts