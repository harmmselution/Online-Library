import styles from './Footer.module.scss';
import facebook from '../../assets/facebook.svg';
import inst from '../../assets/inst.svg';
import linkedin from '../../assets/linkedin.svg';
import vk from '../../assets/vk.svg';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.secured}>© 2020-2023 Cleverland. Все права защищены.</p>
        <div className={styles.media}>
          <img src={facebook} alt='facebook' />
          <img src={inst} alt='instagram' />
          <img src={vk} alt='vk' />
          <img src={linkedin} alt='linkedin' />
        </div>
      </div>
    </footer>
  );
}
