import React, { useState } from 'react';
import "./Error.css";

function Error() {
   
  return (
    <div className='error'>
        <div className="err_container">
            <section className='err_section'>
                <h2>Please type valid city name.</h2>
                <h3>Reload and try again</h3>
            </section>
        </div>
    </div>
  )
}

export default Error