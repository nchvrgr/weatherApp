import React from 'react';

import d01 from '../media/weathers/dayClearSky.mp4';
import d02 from '../media/weathers/dayLightCloudy.mp4';
import d04 from '../media/weathers/dayDarkCloudy.mp4';
import d03 from '../media/weathers/dayCloudy.mp4';
import d50 from '../media/weathers/dayMist.mp4';
import d09 from '../media/weathers/dayRain.mp4';
import d13 from '../media/weathers/daySnow.mp4';
import d11 from '../media/weathers/dayStorm.mp4';
import d10 from '../media/weathers/daySunnyRain.mp4';
import n01 from '../media/weathers/nightClear.mp4';
import n02 from '../media/weathers/nightCloudy.mp4';
import n50 from '../media/weathers/nightMist2.mp4';
import n10 from '../media/weathers/nightRain.mp4';       
import n13 from '../media/weathers/nightSnow.mp4';        
import n11 from '../media/weathers/nightStorm.mp4'; 








function Video({img}) {
    console.log(img)
    if (img === '01d'){
        return(
            <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={d01} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '02d') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={d02} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '03d') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={d03} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '04d') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={d04} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '09d') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={d09} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '10d') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={d10} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '11d') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={d11} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '13d') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={d13} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '50d') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={d50} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '01n'){
        return(
            <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={n01} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '02n') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={n02} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '03n') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={n02} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '04n') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={n02} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '09n') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={n10} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '10n') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={n10} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '11n') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={n11} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '13n') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={n13} type="video/mp4"></source>
        </video>
        )
    }
    if (img === '50n') {
        return(
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
            <source src={n50} type="video/mp4"></source>
        </video>
        )
    }
    return(
        <>
            <h2>{img}</h2>
        </>
    )
}

export default Video
