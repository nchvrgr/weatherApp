import React from 'react';
import './Home.css'
import video from '../media/video.mp4';
import { Link } from 'react-router-dom';
import style from './Home.module.css';

const Home = () => {
    return ( 
        <div className="homehome">
            <div className="home">
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%, -50%)",
                        zIndex: "-1"
                    }}
                >
                    <source src={video} type="video/mp4"></source>
                </video>
                 <h1 id="tituloHome">Check the weather all around the world</h1>

                 <br/>
                <Link to="/cards">
                    <button id="buttonStart">
                    Start
                    </button>
                </Link>
                <p className={style.createdBy}>Created by Nacho</p>            
            </div>
             

        </div>
     );
}


export default Home;