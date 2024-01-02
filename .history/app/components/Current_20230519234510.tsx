import { getCurrentDate } from "../utils/currentDate";

const Current = ({ data }) => {
  const weatherIcon = data.current ? data.current.condition.icon : null;
  const currentDate = getCurrentDate();
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex items-center">
        <div className="text-center">
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img className="w-[90px] object-cover" src={weatherIcon} alt="Weather Icon" />
          </div>
        )}
      </div>

      <div>
        {data.current ? (
          <p className="text-5xl">
            {data.current.temp_c.toFixed()}
            <span>°</span>
          </p>
        ) : null}
        {data.current ? <span>{data.current.condition.text}</span> : null}
      </div>
      <div>
        {data.forecast ? <span>High: {data.forecast.forecastday[0].day.maxtemp_c.toFixed()}°</span> : null}
        {data.forecast ? <span>Low: {data.forecast.forecastday[0].day.mintemp_c.toFixed()}°</span> : null}
      </div>
    </div>
  );
};

export default Current;
