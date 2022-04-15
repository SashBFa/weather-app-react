import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useSelector } from "react-redux";
Chart.register(...registerables);

const Graphic = () => {
  const search = useSelector((state) =>
    state.apiWeatherReducer.list.slice(0, 8)
  );
  console.log(search);
  const theDate = (elem) => {
    let newDate = new Date(elem);
    let day = newDate.toLocaleString("default", { weekday: "short" });
    let hour = newDate.getHours();
    return `${day}, ${hour}h`;
  };
  let currentTemp = [];
  let currentHumidity = [];
  let currentHour = [];
  search.map((element) => {
    currentTemp.push(element.main.temp);
    currentHumidity.push(element.main.humidity);
    currentHour.push(theDate(element.dt_txt));
    return "";
  });
  const data = {
    labels: currentHour,
    datasets: [
      {
        label: "Temperature to 24h",
        data: currentTemp,
        borderColor: "#d59337",
        backgroundColor: "#d5933789",
        fill: true,
      },
    ],
  };
  const data2 = {
    labels: currentHour,
    datasets: [
      {
        label: "Humidity to 24h",
        data: currentHumidity,
        borderColor: "#8ebebc",
        backgroundColor: "#8ebebc82",
        fill: true,
      },
    ],
  };

  return (
    <div className="graphic">
      <Line data={data} />
      <Line data={data2} />
    </div>
  );
};

export default Graphic;
