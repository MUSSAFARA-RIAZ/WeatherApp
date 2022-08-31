import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './index.css';
import axios from 'axios';

export default function MainApp() {
   
    const[city,setcity]=useState(null);
    const[search,setsearch]=useState("Pakistan");

    useEffect(()=>{
        async function fetchdata(){
        //     const waiting=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d194edee3dec649457f74e6c7e3875ff`)
        //  setcity(waiting.data.city);
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d194edee3dec649457f74e6c7e3875ff`;
        const response=await fetch(url);
        const res=await response.json();
        setcity(res.main);



        }
        fetchdata();


    },[search]);
  return (
    <div className='parent-div'>
        <div className='inputf'>
            <input type="search" onChange={(event)=>{
               setsearch(event.target.value);
            }} />
            <i className="fa-solid fa-magnifying-glass"></i>
             
            
        </div>
        {!city?(
            <p>NO FOUND</p>
        ): (
              <div className='city-temp'>
              <h2>
             
              <i className="fas fa-street-view"></i>{search}
              <div className='ocean'>
              <h3 id='wave' className='current-temp'>{city.temp}</h3>
              <h3 id='wave' className='min-temp'>Min-temp is {city.temp_min} | Max-temp is {city.temp_max}</h3>
              </div>     
              </h2>
              </div>

        )}
      
     
    </div>
  )
}
