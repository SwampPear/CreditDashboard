import styles from './Charts.module.css'
import { Row, Col } from 'antd'
import Chart from '../chart/Chart'
import { apiData } from '../../app/types'


interface IChartsProps {
  data?: apiData['data']
}

const Charts = (props: IChartsProps) => {
  return (
    <div className={styles.container}>
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
  )
}

export default Charts