import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Column, ColumnConfig } from '@ant-design/plots'
import { apiData } from '../../app/types'


interface IColumnChartProps {
  data?: apiData['data']
}

const ColumnChart = (props: IColumnChartProps) => {
  const data = []

  if (props.data) {
    console.log(props.data)
    for (let i = 0; i < props.data.length; i++) {
      data.push({
        'XData': props.data[0].XData[i],
        'YData': props.data[0].YData[i]
      })
    }
  }

  const config: ColumnConfig = {
    appendPadding: 10,
    data,
    xField: 'XData',
    yField: 'YData',
    label: {
      position: 'middle',
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
  return <Column {...config} />;
};

export default ColumnChart