import sun from "./assets/img/01.svg";
import rain from "./assets/img/17.svg";
import cloudy from "./assets/img/09.svg";

import "./App.css";

const weatherInfo = [
  {
    weekDey: "Monday",
    imgURL: cloudy,
    temp: "36C",
  },
  {
    weekDey: "Tuesday",
    imgURL: rain,
    temp: "32C",
  },
  {
    weekDey: "Wednesday",
    imgURL: rain,
    temp: "35C",
  },
  {
    weekDey: "Thursday",
    imgURL: sun,
    temp: "45C",
  },
  {
    weekDey: "Friday",
    imgURL: cloudy,
    temp: "36C",
  },
  {
    weekDey: "Saturday",
    imgURL: rain,
    temp: "37C",
  },
  {
    weekDey: "Sunday",
    imgURL: sun,
    temp: "39C",
  },
];

const newArr = weatherInfo.map((el) => {
  return (
    <div className="day">
      <h3>{el.weekDey}</h3>
      <img src={el.imgURL} />
      <p>{el.temp}</p>
    </div>
  );
});

function App() {
  return (
    <div className="App">
      <h1>Weather of this week</h1>
      <div className="week">{newArr}</div>
      
    </div>
  );
}

export default App;
