import React, { useEffect } from 'react';
import styles from './Parallax.module.css';
import svg1 from '../../assets/svg1.svg';
import svg2 from '../../assets/svg2.svg';
import svg3 from '../../assets/svg3.svg';
import svg4 from '../../assets/svg4.svg';

const Parallax = () => {
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
        <div className={styles.parallaxContainer}>
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
