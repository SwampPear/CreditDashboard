import styles from './Chart.module.css'
import { useEffect, useState } from 'react'
import { Pie, Column, RadialBar } from '@ant-design/plots'
import { Select } from 'antd'
import { apiData, chartData, pieConfig, radialBarConfig, columnConfig, ChartType } from '../../app/types'
import { useAppSelector } from '../../app/hooks'
import { selectColorTheme, ColorTheme } from '../colorThemeSettings/ColorThemeSettingsSlice'


interface IChartProps {
  type: ChartType
  data?: apiData[]
}


const Chart = (props: IChartProps) => {
  const [data, setData] = useState<chartData[]>()
  const [dataSet, setDataSet] = useState<string>()

  const colorTheme = useAppSelector(selectColorTheme)

  const routeColor = (colorTheme: ColorTheme) => {
    switch(colorTheme) {
      case ColorTheme.LIGHT:
        return styles.bgLight
      case ColorTheme.OPAL:
        return styles.bgOpal
    }
  }

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

  const renderChart = (type: ChartType, data: chartData[]) => {
    switch(type) {
      case ChartType.PIE:
        return <Pie className={styles.chart} {...pieConfig} data={data}></Pie>
      case ChartType.COLUMN:
        return <Column className={styles.chart} {...columnConfig} data={data}></Column>
      case ChartType.RADIALBAR:
        return <RadialBar className={styles.chart} {...radialBarConfig} data={data}></RadialBar>
    }
  }

  const render = () => {
    if (data) {
      return (
        <div className={`${styles.chartContainer} ${routeColor(colorTheme)}`}>
          <div className={styles.chartControlsContainer}>
            <h1 className={styles.chartHeader}>
              {dataSet?.match(/[A-Z][a-z]+|[0-9]+/g)?.join(" ")}
            </h1>
            <Select
              onChange={handleChange}
              defaultValue={props.data?.[0].Name}
              options={props.data?.map((element) => {return {value: element['Name'], label: element['Name']}})}
            />
          </div>
          {renderChart(props.type, data)}
        </div>
      )
    }

    return <></>
  }

  return render()
}

export default Chart