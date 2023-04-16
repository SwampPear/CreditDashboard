import styles from './Chart.module.css'
import { useEffect, useState } from 'react'
import { Pie, Column, RadialBar } from '@ant-design/plots'
import { Select } from 'antd'
import { APIData, ChartData, pieConfig, radialBarConfig, columnConfig, ChartType } from '../../app/types'
import { useAppSelector } from '../../app/hooks'
import { selectColorTheme, ColorTheme } from '../colorThemeSettings/ColorThemeSettingsSlice'


interface IChartProps {
  type: ChartType
  data?: APIData[]
}


const Chart = (props: IChartProps) => {
  const [data, setData] = useState<ChartData[]>()   // selected data
  const [dataSet, setDataSet] = useState<string>()  // selected dataset name

  const colorTheme = useAppSelector(selectColorTheme)

  /**
   * Returns proper class name for currently selected color theme.
   * @param colorTheme - the current color theme
   * @returns class name of color theme for this element
   */
  const routeColor = (colorTheme: ColorTheme) => {
    switch(colorTheme) {
      case ColorTheme.LIGHT:
        return styles.bgLight
      case ColorTheme.OPAL:
        return styles.bgOpal
    }
  }

  /**
   * Sets 'data' state to selected dataset and properly formats data.
   * @param idx - the index of dataset to set data as
   */
  const resetData = (idx: number) => {
    if (props.data) {
      const tempData = []

      for (let i = 0; i < props.data[idx].XData.length; i++) {
        tempData.push({
          'XData': props.data[idx].XData[i],
          'YData': props.data[0].YData[i]
        })
      }
      
      setData(tempData)
      setDataSet(props.data?.[idx].Name)
    }
  }

  // set initial data
  useEffect(() => {
    resetData(0)
  }, [props.data])

  /**
   * Handles change for the dataset select element, resets data to chosen dataset.
   * @param value - the dataset to change data to
   */
  const handleChange = (value: string) => {
    if (props.data) {
      for (let i = 0; i < props.data?.length; i++) {
        if (props.data?.[i].Name === value) {
          resetData(i)
        }
      }
    }
  }

  /**
   * Renders chart of a certain type with data.
   * @param type - type of chart to render
   * @param data - data to dispklay in chart
   * @returns 
   */
  const renderChart = (type: ChartType, data: ChartData[]) => {
    switch(type) {
      case ChartType.PIE:
        return <Pie className={styles.chart} {...pieConfig} data={data}></Pie>
      case ChartType.COLUMN:
        return <Column className={styles.chart} {...columnConfig} data={data}></Column>
      case ChartType.RADIALBAR:
        return <RadialBar className={styles.chart} {...radialBarConfig} data={data}></RadialBar>
    }
  }

  /**
   * Formats a header in this Chart with spaces and capitalization.
   * @param header - unformatted header
   * @returns formatted header
   */
  const formatHeader = (header?: string) => {
    return header?.match(/[A-Z][a-z]+|[0-9]+/g)?.join(" ")
  }


  if (data) {
    return (
      <div className={`${styles.container} ${routeColor(colorTheme)}`}>
        <div className={styles.controlsContainer}>
          <h1 className={styles.header}>
            {formatHeader(dataSet)}
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

export default Chart