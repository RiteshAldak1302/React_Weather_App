import './App.css'
import coldy from "./assets/coldy.jpg"
import cloudy from "./assets/cloudy.jpg"
import stromy from "./assets/stromy.jpg"
import clear_sky from "./assets/clear_sky.jpg"
import { useEffect, useState } from 'react';
import { getWeatherFunction } from './weatherData';
import Error from './Error.jsx';
import InputSection from './InputSection';
import CurrentTemp from './CurrentTemp.jsx';
import TempDesc from './TempDesc';
import Forecast from './Forecast';


function App() {
  const [city,setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg , setBg] = useState(coldy); 
  const [errorOccur, setErrorOccur] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherFunction(city, units);
      if(data.isError){
         setErrorOccur(true);
      }else{
         setWeather(data);   
        
      if(data.description === "overcast clouds" || data.description === "broken clouds" || data.description === "moderate rain" ){ 
        setBg(stromy);
      }else if(data.description === "clear sky" ){
        setBg(clear_sky);
      }else if(data.description === "few clouds" || data.description === "light rain" || data.description === "scattered clouds"){
        setBg(cloudy);
      }
    }
      
    };
     
    fetchWeatherData();
  }, [units,city]);

 

  return (
    <div className='app' style={{ backgroundImage: `url(${bg})` }}>
      <div className="main">
        {
          weather && (
            errorOccur ? <Error /> : <>  
            <div className="container">
              {/* This is InputSection Component */}   
              <InputSection setUnits={setUnits} setCity={setCity} />
              <div className="temp_section section">
                {/* this is CurrentTemp Component */}
                <CurrentTemp weather={weather} units={units} />
                {/* this is TempDesc Component */}
                <TempDesc weather={weather} units={units} />
                 
              </div>
              <Forecast list={weather.forecastList} units={units} /> 

            </div>
            </>
          )
        }

      </div>
    </div>
  )
}

export default App
