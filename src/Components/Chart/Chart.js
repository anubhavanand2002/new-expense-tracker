import React from 'react'
import './Chart.css';
import ChartBar from './ChartBar';
export default function Chart(props) {
  // console.log(props.dataPoints);
  const checkvalue=props.dataPoints.map(datapoint=>datapoint.value);
  const totalMaximum=Math.max(...checkvalue);
  // console.log(props.dataPoints);
  return (
    <div className ='chart'>
      {props.dataPoints.map(datapoint => {
        return(
        <ChartBar
        key={datapoint.label}
        value={datapoint.value}
        maxValue={totalMaximum}
        label={datapoint.label}
        />)
      })}
    
    </div>
  )
};
