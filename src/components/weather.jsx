import weatherInfo from "../data/weather.data";

export default function Weather() {
  return weatherInfo.map(({ weekDey, temp, imgURL: Icons }) => {
    return (
      <div className="day">
        <h3>{weekDey}</h3>
        <Icons />
        <p>{temp}</p>
      </div>
    );
  });
}
