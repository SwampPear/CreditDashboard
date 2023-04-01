import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots'
import { apiData } from '../../app/types'


interface IPieChartProps {
  data?: apiData
}

const PieChart = (props: IPieChartProps) => {
  const data = []

  if (props.data) {
    console.log(props.data.data)
    for (let i = 0; i < props.data.data.length; i++) {
      data.push({
        'XData': props.data.data[0].XData[i],
        'YData': props.data.data[0].YData[i]
      })
      console.log(props.data.data[0])
    }
  }

  const config = {
    appendPadding: 10,
    data,
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
  return <Pie {...config} />
};

export default PieChart