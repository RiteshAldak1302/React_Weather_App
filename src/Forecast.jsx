import React from 'react';
import "./Forecast.css" 
import dayjs from "dayjs";

function Forecast({ list, units }) {

    const idlist = [0, 1, 2, 3, 4];
    const iconURLFunc = (id) => `https://openweathermap.org/img/wn/${list[id].weather[0].icon}@2x.png`;
    const weekdays = [
        "Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thrusday" , "Friday", "Saturday"
    ];
    const weekdayIndex = dayjs.unix(list[0].dt).day();

    return (
        <div className='forecast section'>
            {
                idlist.map((it) => (
                    <div className="forecast_card" key={it}>
                        <small className="forecast_date">{weekdays[(weekdayIndex+it)%7]}</small>
                        <div className="forecast_icon">
                            <img src={`${iconURLFunc(it)}`} alt="weather-icon" /> 
                        </div>
                        <div className="forecast_data">
                        <h4 className="forecast_temp">{`${list[it].main.temp.toFixed()}`} °{units === "metric" ? "C" : "F"}</h4>
                        &nbsp; &nbsp;
                        <h5 className="forecast_desc">{`${list[it].weather[0].description}`}</h5>
                        </div>
                    </div>
                ))



            }

        </div>
    )
}

export default Forecast;