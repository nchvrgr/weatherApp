import React, {useState} from "react";
import { Link } from "react-router-dom";
import style from './Ciudad.module.css'
import { useEffect } from "react";
import axios from 'axios';
import Video from "./Video";

export default function Ciudad(ciudad) {
    const [city, setCity] = useState({});
    const [hora, setHora] = useState("");

    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    

    useEffect( () => {
        async function fetchCity(){
            try{
                const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${ciudad.city}&appid=${apiKey}&units=metric`);
                if(data){
                    const ciudad = {
                        min: Math.round(data.main.temp_min),
                        max: Math.round(data.main.temp_max),
                        img: data.weather[0].icon,
                        id: data.id,
                        wind: data.wind.speed,
                        country: data.sys.country,
                        temp: Math.round(data.main.temp),
                        name: data.name,
                        weather: data.weather[0].main,
                        desc: data.weather[0].description,
                        feel: data.main.feels_like,
                        latitud: data.coord.lat,
                        longitud: data.coord.lon,
                        flag: data.sys.country,
                        pressure: data.main.pressure,
                        humidity: data.main.humidity,
                        clouds: data.clouds.all,
                        windgusts: data.wind.gust
                    };
                    await setCity(ciudad);
                }
                const timeResponse = await axios.get(`https://timezone.abstractapi.com/v1/current_time/?api_key=7e458e86ea364995882b24c38dff371f&location=${data.sys.country}`)
                const timeData = timeResponse.data;
                var time = await timeData.datetime.slice(11, 16);
                await setHora(time);
            }
            catch (err){
                console.log("Error time api", err)
            }
        }
        fetchCity();
    }, [city.latitud, city.longitud, setCity, hora, ciudad.city]);

    
    return (
        <div className={style.cityScreen}>
                    <div className={style.titleDiv}>
                        <h1 className={style.title}>{city.name}</h1>
                        <img alt={city.flag} src={`https://www.countryflags.io/${city.flag}/shiny/64.png`}/>
                    <p className={style.time}>{hora}</p>
                    <p className={style.detail}>{city.desc?.charAt(0).toUpperCase()+city.desc?.slice(1)}</p>
                        <div className={style.stats}>
                            <p>Min / Max: <b>{city.min}° / {city.max}°</b></p>
                            <p><b>{city.temp}°C</b></p>
                            <p>Pressure: <b>{city.pressure} mb</b></p>
                        </div>
                        <div className={style.stats}>
                            <p>Feels like: <b>{Math.floor(city.feel)}°C</b></p>
                            <img className={style.weatherLogo} src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="weatherIcon" />
                            <p>Humidity: <b>{city.humidity}%</b></p>
                        </div>
                        <div className={style.stats}>
                            <p>Total clouds: <b>{city.clouds}</b></p>
                            <p className={style.stat}>Wind: <b>{Math.floor(city.wind)} km/h</b></p>
                            <p>Gusts: <b>{parseInt(city.windgusts) > 0 ? city.windgusts : "0.1"} km/h</b></p>

                        </div>
                        <Video img={city.img}/>
                    </div>
            <div className={style.buttonDiv}>
                <Link to="/cards" className={style.linkto}>
                    <p className={style.Link}>Volver</p>
                </Link>
            </div>

        </div>
    )
}