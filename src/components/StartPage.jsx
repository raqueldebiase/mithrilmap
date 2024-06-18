import React from 'react';
import styles from './StartPage.module.css';
import { Link } from 'react-router-dom';
import samEfrodo from '../assets/samEfrodo.png';


const StartPage = () => {
  return (
    <div className={styles.InitialText}>
      <h1>Heading to Middle-earth (Minus the Trouble): Try <span>Mithril Map</span></h1>
      <p>
      This is a website for those who venture into the immense and daunting world of J.R.R. Tolkien's literature. It was built to make life easier for a two-person Book Club (since 2019), who have opted for the chaotic and challenging task of reading his publications following level 02 of reading.</p>
      <p>If you also have the suspicious desire to suffer, here is a tool that will facilitate tracking your reading and record your progress, but I warn you that this journey will be long. Yes, believe me.
      </p>
      <p>So, grab your virtual walking stick, click the button below, and let's get mapping! Because every good journey starts with a single click <span>(and maybe a second breakfast)</span>.
      </p>
      <div className={styles.linkTo}>
        <Link to="/Login" className={styles.button}>Get Start</Link>
      </div>
      <div className={styles.samEfrodo}>
        <img src={samEfrodo}></img>
      </div>
      
    </div>
  )
}

export default StartPage
