import styles from './PieChart.module.css'
import { Pie, PieConfig } from '@ant-design/plots'
import { apiData } from '../../app/types'
import useSelection from 'antd/es/table/hooks/useSelection'
import { useEffect, useState } from 'react'


interface IPieChartProps {
  data?: apiData['data']
}

const PieChart = (props: IPieChartProps) => {
  const [data, setData] = useState<{XData: string, YData: number}[]>()

  useEffect(() => {
    const tempData = []

    if (props.data) {
      console.log(props.data)
      for (let i = 0; i < props.data.length; i++) {
        tempData.push({
          'XData': props.data[0].XData[i],
          'YData': props.data[0].YData[i]
        })
      }
    }

    setData(tempData)
  }, [props.data])

  
  const config = {
    appendPadding: 10,
    angleField: 'YData',
    colorField: 'XData',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  }

  if (data) {
    return (
      <Pie className={styles.chart} {...config} data={data}/>
    )
  }

  return <></>
}

export default PieChart