import React from 'react'
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import Paper from '@mui/material/Paper';
import { useState , useEffect } from 'react';

const WeatherCard = () => {

    const [value , setValue] = useState("");
    const [search , setSearch] = useState("Balasore");

    const inputText = (e) =>
    {
        setSearch(e.target.value)
    };

    useEffect(()=>{

        const apiCall = async()=>
        {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=841d4725a816a6a06d403632bd166509`
            const res = await fetch(url);
            const result = await res.json();
            setValue(result.main);
        }

        apiCall();

    },[search]);

  return (
    <>
        <div className='card__div'>

        <Paper sx={{backgroundColor : "#A0B7DC"}} elevation={6} className='paper'> 
            
             
                    <div className='card__items'>
                    <input type="search" value={search} onChange={inputText} />

                    {!value ? <><p className='notfound'>No Data Found</p></> :
                        <>
                            <h1><LocationOnSharpIcon sx={{fontSize : "100px" , color : "white"}}/>{search}</h1>
                            <p>{value.temp}°C</p>
                            <h5>Min : {value.temp_min}°C | Max : {value.temp_max}°C</h5>
                            <div className='wave -one'></div>        
                            <div className='wave -two'></div>   
                            <div className='wave -three'></div> 
                        </>
                    }

                    </div>
            
        </Paper>      

        </div>
    </>
  )

}
export default WeatherCard