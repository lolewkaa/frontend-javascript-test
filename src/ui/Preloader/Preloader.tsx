import React from 'react';
import * as styles from './Preloader.module.css';

const Preloader = () => (
        <div className={styles.preloader}>
            <div className={styles.preloader__container}>
                <span className={styles.preloader__round}></span>
            </div>
        </div>
);

export default Preloader;
