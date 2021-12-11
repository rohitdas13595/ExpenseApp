import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
    let dataPointsValue = props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
