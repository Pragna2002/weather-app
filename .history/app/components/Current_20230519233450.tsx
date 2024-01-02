import React from "react";

const Current = ({ data }) => {
  const weatherIcon = data.current ? data.current.condition.icon : null;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
        </div>
        {weatherIcon && (
          <div>
            <img src={weatherIcon} alt="Weather Icon" />
          </div>
        )}
      </div>

      <div>
        {data.current ? (
          <p>
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
