import styles from './Charts.module.css'
import Chart from '../chart/Chart'
import { APIData } from '../../app/types'
import { useState, useEffect } from 'react'
import Widget from '../widget/Widget'
import { ChartType } from '../../app/types'


interface IChartsProps {
  data?: APIData[]
}


const Charts = (props: IChartsProps) => {
  const [totalProducts, setTotalProducts] = useState<number>(0)
  const [totalMembers, setTotalMembers] = useState<number>(0)
  const [maxLifeStage, setMaxLifeStage] = useState<string>('')
  const [preferredChannel, setPreferredChannel] = useState<string>('')

  useEffect(() => {
    if (props.data) {
      for (let i = 0; i < props.data?.length; i++) {
        const dataSet = props.data?.[i].Name
        let max = 0
        let idx

        switch (dataSet) {
          case 'CurrentProducts':
            setTotalProducts(props.data?.[i].XData.length)
            break
          
          case 'Levels':
            setTotalMembers(props.data?.[i].YData.reduce((sum, a) => sum + a, 0))
            break

          case 'LifeStage':
            max = 0
            idx = 0

            for (let j = 0; j < props.data?.[i].YData.length; j++) {
              if (props.data?.[i].YData[j] > max) {
                max = props.data?.[i].YData[j]
                idx = j
              }
            }

            setMaxLifeStage(props.data?.[i].XData[idx])
            break

          case 'PreferredChannel':
            max = 0
            idx = 0

            for (let j = 0; j < props.data?.[i].YData.length; j++) {
              if (props.data?.[i].YData[j] > max) {
                max = props.data?.[i].YData[j]
                idx = j
              }
            }

            setPreferredChannel(props.data?.[i].XData[idx])
            break
        }
      }
    }
    
  }, [props.data])

  return (
    <>
      <div className={styles.chartContainer}>
        <div className={styles.widgetContainer}>
          <Widget header="Total Products" content={totalProducts}/>
          <Widget header="Total Members" content={totalMembers}/>
          <Widget header="Max Life Stage" content={maxLifeStage}/>
          <Widget header="Preferred Channel" content={preferredChannel}/>
        </div>
        <Chart type={ChartType.PIE} data={props.data}/>
        <Chart type={ChartType.RADIALBAR} data={props.data}/>
        <Chart type={ChartType.COLUMN} data={props.data}/>
      </div>
    </>
    
  )
}

export default Charts