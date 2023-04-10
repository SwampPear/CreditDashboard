import style from './Chart.module.css'
import { useEffect, useState } from 'react'
import { Pie, Column, RadialBar } from '@ant-design/plots'
import { Select } from 'antd'
import { apiData } from '../../app/types'

const pieConfig = {
  appendPadding: 16,
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
  appendPadding: 16,
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
  appendPadding: 16,
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
  data?: apiData['data']
}

const Chart = (props: IChartProps) => {
  const [data, setData] = useState<{XData: string, YData: number}[]>()
  const [dataSet, setDataSet] = useState<string>()

  useEffect(() => {
    if (props.data) {
      const tempData = []

      for (let i = 0; i < props.data[0].XData.length; i++) {
        tempData.push({
          'XData': props.data[0].XData[i],
          'YData': props.data[0].YData[i]
        })
      }
      
      setData(tempData)
      setDataSet(props.data?.[0].Name)
    }
  }, [props.data])

  const handleChange = (value: string) => {
    if (props.data) {
      for (let i = 0; i < props.data?.length; i++) {
        if (props.data?.[i].Name === value) {
          const tempData = []

          for (let j = 0; j < props.data[i].XData.length; j++) {
            tempData.push({
              'XData': props.data[i].XData[j],
              'YData': props.data[i].YData[j]
            })
          }
          
          setData(tempData)
          setDataSet(props.data?.[i].Name)
        }
      }
    }
  }

  const render = () => {
    if (data) {
      switch (props.type) {
        case 'Pie':
          return (
            <div className={style.chartContainer}>
              <div className={style.chartControlsContainer}>
                <h1 className={style.chartHeader}>
                  {dataSet?.match(/[A-Z][a-z]+|[0-9]+/g)?.join(" ")}
                </h1>
                <Select
                  onChange={handleChange}
                  defaultValue={props.data?.[0].Name}
                  options={props.data?.map((element) => {return {value: element['Name'], label: element['Name']}})}
                />
              </div>
              <Pie className={style.chart} {...pieConfig} data={data}></Pie>
            </div>
          )
        case 'Column':
          return (
            <div className={style.chartContainer}>
              <div className={style.chartControlsContainer}>
                <h1 className={style.chartHeader}>
                  {dataSet?.match(/[A-Z][a-z]+|[0-9]+/g)?.join(" ")}
                </h1>
                <Select
                  onChange={handleChange}
                  defaultValue={props.data?.[0].Name}
                  options={props.data?.map((element) => {return {value: element['Name'], label: element['Name']}})}
                />
              </div>
              <Column className={style.chart} {...columnConfig} data={data}></Column>
            </div>            
          )
        case 'RadialBar':
          return (
            <div className={style.chartContainer}>
              <div className={style.chartControlsContainer}>
                <h1 className={style.chartHeader}>
                  {dataSet?.match(/[A-Z][a-z]+|[0-9]+/g)?.join(" ")}
                </h1>
                <Select
                  onChange={handleChange}
                  defaultValue={props.data?.[0].Name}
                  options={props.data?.map((element) => {return {value: element['Name'], label: element['Name']}})}
                />
              </div>
              <RadialBar className={style.chart} {...radialBarConfig} data={data}></RadialBar>
            </div>           
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