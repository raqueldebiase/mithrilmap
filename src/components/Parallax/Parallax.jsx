import React, { useEffect } from 'react';
import  { useLocation } from 'react-router-dom';
import styles from './Parallax.module.css';
import svg1 from '../../assets/wave1.svg';
import svg2 from '../../assets/wave2.svg';
import svg3 from '../../assets/wave3.svg';
import svg4 from '../../assets/wave4.svg';

const Parallax = () => {

    const location = useLocation();
    const isHomeRoute = location.pathname === '/home';


    useEffect(() => {
        const handleScroll = () => {
            const parallaxElements = document.querySelectorAll(`.${styles.parallax}`);
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.getAttribute('data-speed'));
                const yPos = -(window.pageYOffset * speed / 100);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.parallaxContainer} ${isHomeRoute ? styles.homeRoute : ''}`}>
            <div className={`${styles.parallax} ${styles.layer1}`} data-speed="200">
                <img src={svg1} alt="Layer 1" />
            </div>
            <div className={`${styles.parallax} ${styles.layer2}`} data-speed="10">
                <img src={svg2} alt="Layer 2" />
            </div>
            <div className={`${styles.parallax} ${styles.layer3}`} data-speed="20">
                <img src={svg3} alt="Layer 3" />
            </div>
            <div className={`${styles.parallax} ${styles.layer4}`} data-speed="100">
                <img src={svg4} alt="Layer 4" />
            </div>
        </div>
    );
};

export default Parallax;
