import { useState } from 'react';
import styles from './error.module.scss';
import errorSvg from '../../assets/errorSvg.svg';
import closeError from '../../assets/closeError.svg';

export function Error() {
  const [close, setClose] = useState(false);
  return (
    close === false && (
      <div className={styles.errorContainer} data-test-id='error'>
        <div className={styles.errorContent}>
          <img src={errorSvg} alt='errorSvg' className={styles.errorImg} />
          <p className={styles.textError}>Что-то пошло не так. Обновите страницу через некоторое время.</p>
          <img
            src={closeError}
            alt='close'
            onClick={() => setClose(true)}
            aria-hidden='true'
            className={styles.closeError}
          />
        </div>
      </div>
    )
  );
}
