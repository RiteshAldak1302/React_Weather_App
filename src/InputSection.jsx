import React, { useState } from 'react'
import "./InputSection.css"

function InputSection({setUnits , setCity}) {
     const [input , setInput] = useState('');
    const handleUnitsClick = (e) =>{
          const button = e.currentTarget;
          const currentUnit = button.innerText.slice(1);
          const isCelsius = currentUnit === 'C';
          button.innerText = isCelsius ? '°F' : '°C'; 
          const updatedUnit =  isCelsius ? 'metric' : 'imperial'; 
          setUnits(updatedUnit); 
    }
    function handleChange(e) {
             setInput(e.target.value);
     }
     function setFunc(){
        setCity(input);
     }
     function handleSubmit(e) {
        setFunc();
        e.preventDefault();
        setInput("");
     }
    return (
        <div className="section input_section">
            <div className="input_search">
                <form action="" onSubmit={handleSubmit}>
                <input type="text" required name='city' value={input} placeholder='Enter City Name...' onChange={handleChange}  />
                <button className="btn" type='submit' >Search</button>
                </form>
            </div>
            <button className='unit_btn btn' onClick={(e) => handleUnitsClick(e) } >°F</button>
            
        </div>
    )
}

export default InputSection