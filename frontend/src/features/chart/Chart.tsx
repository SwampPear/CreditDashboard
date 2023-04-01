import style from './Chart.module.css'
import { useEffect, useState } from 'react'
import { Pie, Column, RadialBar } from '@ant-design/plots'
import { apiData } from '../../app/types'


const pieConfig = {
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

const columnConfig = {
  appendPadding: 10,
  xField: 'XData',
  yField: 'YData',
  label: {
    style: {
      fill: '#FFFFFF',
      opacity: 0.6,
    },
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
}

// needed to fix type error in Ant radial bar chart
const lineCapRound: 'round' | 'butt' | 'square' | undefined = 'round'

const radialBarConfig = {
  xField: 'XData',
  yField: 'YData',
  maxAngle: 270,
  radius: 0.8,
  innerRadius: 0.2,
  barStyle: {
    lineCap: lineCapRound,
  },
}


interface IChartProps {
  type: 'Pie' | 'Column' | 'RadialBar'
  className?: string
  data?: apiData['data']
}

const Chart = (props: IChartProps) => {
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

  const render = () => {
    if (data) {
      switch (props.type) {
        case 'Pie':
          return (
            <Pie className={style.chart} {...pieConfig} data={data}></Pie>
          )
        case 'Column':
          return (
            <Column className={style.chart} {...columnConfig} data={data}></Column>
          )
        case 'RadialBar':
          return (
            <RadialBar className={style.chart} {...radialBarConfig} data={data}></RadialBar>
          )
        default:
          return <></>
      }
    }

    return <></>
  }

  return render()
}

export default Chart