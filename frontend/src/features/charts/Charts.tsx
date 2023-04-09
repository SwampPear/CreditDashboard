import styles from './Charts.module.css'
import { Row, Col, Select } from 'antd'
import Chart from '../chart/Chart'
import { apiData } from '../../app/types'
import { useState, useEffect } from 'react'
import Widget from '../widget/Widget'


interface IChartsProps {
  data?: apiData['data']
}

const Charts = (props: IChartsProps) => {
  return (
    <>
      <div className={styles.chartContainer}>
        <Row gutter={[24, 24]}>
          <Col className={styles.col}>
            <div className={styles.widgetContainer}>
              <Widget header="d" content={'asdf'}/>
              <Widget header="d" content={'asdf'}/>
              <Widget header="d" content={'asdf'}/>
              <Widget header="d" content={'asdf'}/>
            </div>
          </Col>
          <Col className={styles.col}>
            <Chart type='Pie' data={props.data}/>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col className={styles.col}>
            <Chart type='RadialBar' data={props.data}/>
          </Col>
          <Col className={styles.col}>
            <Chart type='Column' data={props.data}/>
          </Col>
        </Row>
      </div>
    </>
    
  )
}

export default Charts