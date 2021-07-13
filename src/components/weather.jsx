import weatherInfo from "../data/weather.data";


export default function Weather() {
   return weatherInfo.map((el) => {
        return (
          <div className="day">
            <h3>{el.weekDey}</h3>
            {el.imgURL}
            <p>{el.temp}</p>
          </div>
        );
});
}