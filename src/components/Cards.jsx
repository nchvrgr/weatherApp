import React from 'react';
import SearchBar from './SearchBar.jsx';
import Card from './Card.jsx';
import style from './Cards.module.css'

export default function Cards({cities, onClose, onSearch, clearAll, already}) {
  if(cities){
    return (
      <div>
        <br/>
        <div>
          <h5 className={style.text}>Find the current weather of any city you want</h5>
          <SearchBar onSearch={onSearch} clearAll={clearAll}/>
          <p style={{color:"red"}}>{already}</p>
        </div>
        <div className={style.cards}>
            {cities.map( c =>
                <Card        
                  max={c.max}       
                  min={c.min}
                  name={c.name}
                  img={c.img}
                  weather={c.weather}
                  temp = {c.temp}
                  onClose={() => onClose(c.id)}
                  id={c.id}
                  country={c.country}
                /> 
            )}
        </div>
        {
          cities.length > 0 
          ?
            <p className={style.text3}>Click on a card to see more about that city's weather</p>
          :
            <div className={style.info}>
            <p className={style.text2}>No cities loaded yet</p>
            <p className={style.text2}>Add cities by typing its name in the search bar</p>
            </div>
        }
      </div>
    );
  } else {
    return(
      <div>No cities loaded</div>
    )
  }
}
