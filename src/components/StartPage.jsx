import React from 'react';
import styles from './StartPage.module.css';
import { Link } from 'react-router-dom';
import samEfrodo from '../assets/samEfrodo.png';


const StartPage = () => {
  return (
    <div className={styles.InitialText}>
      <div className={styles.InitialTextContent}>
      <h1>Heading to Middle-earth (Minus the Trouble): Try <span>Mithril Map</span></h1>
      <p>
      Welcome to Mithril Map, where brave souls venture into the vast world of J.R.R. Tolkien's literature! This site was created to aid a two-person Book Club (est. 2019) navigating the chaos and challenges of level 02 reading.</p>
      <p> If you also seek such a thrilling challenge, Mithril Map will help you track your reading progress. Be warned, this journey is long. Seriously.
      </p>
      <p>So, grab your virtual walking stick, click below, and let's get mapping! Every great adventure starts with a click  <span>(and maybe a second breakfast)</span>.
      </p>
      <div className={styles.linkTo}>
        <Link to="/Login" className={styles.button}>Get Start</Link>
      </div>
      <div className={styles.samEfrodo}>
        <img src={samEfrodo}></img>
      </div>
      </div> 
    </div>
  )
}

export default StartPage
