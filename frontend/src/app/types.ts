export type APIData = {
  Name: string
  XData: string[],
  YData: number[],
  Source: [],
  Target: [],
  Value: []
}

export type APIResponse = {
  isSuccess: boolean
  data: APIData[],
  systemCode: string
  message: string
  details: string
}

export type ChartData = {
  XData: string, 
  YData: number
}

export const pieConfig = {
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

export const columnConfig = {
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

export const radialBarConfig = {
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

export enum ChartType {
  PIE,
  COLUMN,
  RADIALBAR
}