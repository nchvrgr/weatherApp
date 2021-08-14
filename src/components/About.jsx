import React from 'react';
import Footer from './Footer'
import style from './About.module.css';

const About = () => {
    return ( 
        <div className={style.about}>

            <h1>About</h1>
            <h2>WeatherApp</h2>
            <p>This is one of my first front-end projects that I made. I've created it with React, fetching data from three different APIs:</p>
            <div className={style.apis}>
                <ul>
                    <li>
                        <p>
                            <b>Weather API:</b> gives the data of the current temp of all the cities
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Abstract API:</b> gives the current time of the chosen city
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Country Flags API:</b> gives the flag of the chosen city's country
                        </p>
                    </li>
                </ul> 
            </div>

            <hr/>
            <Footer/>
        </div>
     );
}
 
export default About;