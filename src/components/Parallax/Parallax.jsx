import React, { useEffect } from 'react';
import styles from './Parallax.module.css'; // Ajuste o caminho conforme necessário
import svg1 from '../../assets/svg1.svg'; // Ajuste o caminho conforme necessário
import svg2 from '../../assets/svg2.svg'; // Ajuste o caminho conforme necessário
import svg3 from '../../assets/svg3.svg'; // Ajuste o caminho conforme necessário
import svg4 from '../../assets/svg4.svg'; // Ajuste o caminho conforme necessário

const ParallaxComponent = ({ isHomeRoute }) => {
  useEffect(() => {
    const adjustSpeed = () => {
      const layers = document.querySelectorAll('[data-speed]');
      layers.forEach(layer => {
        if (window.innerWidth < 540) {
          switch (layer.className) {
            case `${styles.parallax} ${styles.layer1}`:
              layer.setAttribute('data-speed', '25'); // Ajuste o valor conforme necessário
              break;
            case `${styles.parallax} ${styles.layer2}`:
              layer.setAttribute('data-speed', '5'); // Ajuste o valor conforme necessário
              break;
            case `${styles.parallax} ${styles.layer3}`:
              layer.setAttribute('data-speed', '10'); // Ajuste o valor conforme necessário
              break;
            case `${styles.parallax} ${styles.layer4}`:
              layer.setAttribute('data-speed', '25'); // Ajuste o valor conforme necessário
              break;
            default:
              break;
          }
        } else {
          switch (layer.className) {
            case `${styles.parallax} ${styles.layer1}`:
              layer.setAttribute('data-speed', '200');
              break;
            case `${styles.parallax} ${styles.layer2}`:
              layer.setAttribute('data-speed', '10');
              break;
            case `${styles.parallax} ${styles.layer3}`:
              layer.setAttribute('data-speed', '20');
              break;
            case `${styles.parallax} ${styles.layer4}`:
              layer.setAttribute('data-speed', '100');
              break;
            default:
              break;
          }
        }
      });
    };

    adjustSpeed();
    window.addEventListener('resize', adjustSpeed);

    return () => window.removeEventListener('resize', adjustSpeed);
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

export default ParallaxComponent;
