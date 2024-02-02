import { useEffect, useState } from 'react';
import { getWeatherFunction } from './weatherData';
import React from 'react';
import "./CurrentTemp.css";
import dayjs from 'dayjs';

function CurrentTemp({weather, units}) {
    const weekdays = [
        "Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thrusday" , "Friday", "Saturday"
    ];

    const weekdayIndex = dayjs.unix(weather.dt).day();

    return (
        <div className="current_temp">
            <h4>{`${weather.name}, ${weather.country}`}</h4>
            <br />
            <div className="date">
                <h4>{weekdays[weekdayIndex]}</h4>
                <h5 id='date'>{new Date().toDateString().slice(4,15)}</h5>
            </div>                                        
            <div className="temp_info">
                <div className="current_weather_cond">
                    <img src={`${weather.iconURL}`} alt="weatherIcon" />
                    <h3>{`${weather.description}`}</h3>
                </div>
                <div className="current_weather_temp">
                    <h1>{`${weather.temp.toFixed()} °${units === "metric" ? "C" : "F"}`}</h1>
                </div>
            </div>
        </div>
    )
}

export default CurrentTemp;