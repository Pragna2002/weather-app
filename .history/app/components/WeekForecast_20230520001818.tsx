const WeekForecast = ({ data }) => {
  return (
    <div className="flex items-center gap-10">
      {data.forecast
        ? data.forecast.forecastday.map((day, index) => (
            <div key={index} className="bg-white/40">
              <p>{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}</p>
              <img className="forecast-icon" src={day.day.condition.icon} alt={day.day.condition.text} />
              <div className="forecast-temps">
                <p className="forecast-temp-high">H {day.day.maxtemp_c.toFixed()}°</p>
                <p className="forecast-temp-low">L {day.day.mintemp_c.toFixed()}°</p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default WeekForecast;