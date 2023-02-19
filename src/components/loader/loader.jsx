import React from 'react';
import styles from '../card-container/card-container.module.scss';
import loader from '../../assets/loader.svg';

export function Loader() {
  return (
    <div className={styles.loader} data-test-id='loader'>
      <img src={loader} alt='loader' className={styles.imageLoader} />
    </div>
  );
}
