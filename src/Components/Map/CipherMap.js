import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./CipherMap.css";

function CipherMap() {
  const startDate = new Date("2022-03-19");
  const endDate = new Date("2023-03-20");
  const day = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

  // Generate an array of dates from startDate to endDate
  const dates = [];
  for (let d = startDate; d <= endDate; d = new Date(d.getTime() + day)) {
    dates.push(d);
  }

  // Create an array of objects with the desired format
  const contributions = dates.map((date) => ({
    date: date.toISOString().split("T")[0],
    count: 0,
    color: "#eeeeee",
  }));

  // Set count to 1 for the dates that you want to have a value of 1
  contributions.forEach((item) => {
    if (
      item.date === "2022-05-01" ||
      item.date === "2022-05-02" ||
      item.date === "2022-05-03" ||
      item.date === "2022-05-04" ||
      item.date === "2022-05-07" ||
      item.date === "2022-05-08" ||
      item.date === "2022-05-11" ||
      item.date === "2022-05-14" ||
      item.date === "2022-05-15" ||
      item.date === "2022-05-18" ||
      item.date === "2022-05-21" ||
      item.date === "2022-05-22" ||
      item.date === "2022-05-25" ||
      item.date === "2022-05-28" ||
      item.date === "2022-05-29" ||
      item.date === "2022-06-01" ||
      item.date === "2022-06-02" ||
      item.date === "2022-06-03" ||
      item.date === "2022-06-04" ||
      item.date === "2022-06-04" ||
      item.date === "2022-06-04" ||
      item.date === "2022-06-04" ||
      item.date === "2022-06-04" ||
      item.date === "2022-06-04" ||
      item.date === "2022-06-04" ||
      item.date === "2022-06-04" ||
      item.date === "2022-06-04" ||
      item.date === "2022-06-04"
    ) {
      item.count = 1;
      // item.color = "#d6e685";
    }
  });
  // const [hoveredValue, setHoveredValue] = useState(null);

  const getClassForValue = (value) => {
    // if (!value) {
    //   return "color-empty";
    // }
    if (value.count === 1) {
      return "color-single";
    }
    if (value.count === 0) {
      return "color-zero";
    }
    return `color-scale-${value.count}`;
  };

  const getTitleForValue = (value) => {
    return `${value.date}`;
  };

  // const handleOnMouseOver = (event, value) => {
  //   setHoveredValue(value);
  // };

  return (
    <div className="cipherMap">
      <h1>CIPHER MAP</h1>

      <div className="contribution-graph">
        <CalendarHeatmap
          startDate={new Date("2022-03-19")}
          endDate={new Date("2023-03-20")}
          values={contributions}
          showWeekdayLabels={true}
          classForValue={getClassForValue}
          titleForValue={getTitleForValue}
          // onMouseOver={handleOnMouseOver}
        />
      </div>
    </div>
  );
}

export default CipherMap;
