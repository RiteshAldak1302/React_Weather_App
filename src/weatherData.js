const API_KEY = import.meta.env.VITE_API_KEY;
const iconURLFunc = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png` ;
const isError = false;
const getWeatherFunction = async (city, units = "metric") => {
  try{
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&exclude=hourly,daily&units=${units}`
     const response = await fetch(URL);
    if (!response.ok) {
     // for handling error
      throw new Error(response.status);
    }

    const data = await response.json();

    const { weather,
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed }, dt_txt, dt
    } = data.list[0];
      const forecastList = data.list;
    const { name, country } = data.city;

    const { description, icon } = weather[0];

    return {
             description,  iconURL : iconURLFunc(icon) , temp, feels_like, temp_min, temp_max, pressure, humidity, speed, country, name , dt_txt, dt ,forecastList, isError
    }
  } catch (error) {
    if(error.message === '404')
    return { error: "Failed to fetch weather data. Please check your query and try again." , isError:true };
  }
}

export { getWeatherFunction };
