import React from 'react'
import { 
  ChartComponent, 
  SeriesCollectionDirective, 
  SeriesDirective,
  Inject,
  DateTime,
  LineSeries,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-charts'
import { LinePrimaryXAxis, LinePrimaryYAxis, lineCustomSeries } from './../../data/dummy.js'
import { useStateContext } from '../../contexts/ContextProvider.js'


export default function LineChart() {

  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index)=> <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}
