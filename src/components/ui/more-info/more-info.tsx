import React from 'react';
import styles from '../../../pages/book--page/book-page.module.scss';
import { IMoreInfo } from '../../../interfaces/interfaces';

export const MoreInfo: React.FC<IMoreInfo> = ({ info }) => {
  return (
    <>
      <h3 className={styles.moreInfo}>Подробная информация</h3>
      <section className={styles.info}>
        <div className={styles.leftInfo}>
          <div className={styles.leftContainer}>
            <div className={styles.type}>Издательство</div>
            <div className={styles.type}>Год издания</div>
            <div className={styles.type}>Страниц</div>
            <div className={styles.type}>Переплёт</div>
            <div className={styles.type}>Формат</div>
          </div>
          <div className={styles.rightContainer1}>
            <div className={styles.typeName}>{info.publish}</div>
            <div className={styles.typeName}>{info.issueYear}</div>
            <div className={styles.typeName}>{info.pages}</div>
            <div className={styles.typeName}>{info.cover}</div>
            <div className={styles.typeName}>{info.format}</div>
          </div>
        </div>
        <div className={styles.rightInfo}>
          <div className={styles.leftContainer}>
            <div className={styles.genre}>Жанр</div>
            <div className={styles.type}>Вес</div>
            <div className={styles.type}>ISBN</div>
            <div className={styles.type}>Изготовитель</div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.typeName}>{info.title}</div>
            <div className={styles.typeName}>{info.weight}</div>
            <div className={styles.typeName}>{info.ISBN}</div>
            <div className={styles.typeName}>{info.producer}</div>
          </div>
        </div>
      </section>
    </>
  );
};
