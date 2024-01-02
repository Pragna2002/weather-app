import React from "react";

const Current = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl">Today</h1>
      <div>{data.location ? <h1>{data.location.name}</h1> : null}</div>
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
