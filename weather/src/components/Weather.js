import React, { useState } from 'react'

const Weather = () => {

    const [city,setcity] = useState([]);
    const [data,setdata] = useState({});

    const onchangehandler=(e)=>{
        setcity(e.target.value);
    };

    const onsubmithandler= ()=>{
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e1ae1715bbmshf31ff158913273cp1242a0jsn06f505144a48',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };
      
      fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then((json)=>{
          console.log(json)
          setdata(json);
        })
        .catch(err => console.error(err));
    };

   
  return (
    <>
    <div className="ui search">
  <div className="ui icon input">
    <input className="prompt" type="text" placeholder="Search..." value={city} onChange={onchangehandler}/>
    <i className="search icon"></i>
  </div>
  <div className="results"></div>
  <button className="ui primary basic button" type="submit" onClick={onsubmithandler}>Search</button>
</div>
<table className="ui celled table">
  <thead>
    <tr><th>Temperature in <i>{city}</i></th>
    <th>Wind Speed in <i>{city}</i></th>
    <th>Humidity in <i>{city}</i></th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Temperature">{data.temp}<span> °C</span></td>
      <td data-label="Wind Speed">{data.wind_speed}<span> Km/hr</span></td>
      <td data-label="Humidity">{data.humidity} <span> %</span></td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Weather
