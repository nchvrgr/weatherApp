import React from 'react';
import style from './Footer.module.css'
import github from '../media/github.png'
import linkedin from '../media/linkedin.png'

export default function Footer(){
    return(
        <footer className={style.footerText}>
            <p>Created by Nacho ♡</p>
            <div className={style.social}>
                    <img alt=""></img>
                    <img alt=""></img>
                    <img src={github} width={50} alt="github" className={style.gitHub}/>
                    <img src={linkedin} width={50} alt="github" className={style.gitHub}/>
                    <img alt=""></img>
                    <img alt=""></img>
            </div>
            <div className={style.social}>
                    <img alt=""></img>
                    <img alt=""></img>
                    <a href="https://www.github.com/nchvrgr" target="__blank" className={style.gitTag}>nchvrgr</a>
                    <a href="https://www.linkedin.com/in/vjuanignacio" target="___blank" className={style.linkTag}>vjuanignacio</a>
                    <img alt=""></img>
                    <img alt=""></img>
            </div>
            
        </footer>
    )
}