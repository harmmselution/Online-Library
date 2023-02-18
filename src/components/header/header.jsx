import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import logo from '../../assets/clever.svg';
import avatar from '../../assets/avatar.svg';
import burger from '../../assets/burger.svg';
import { NavMenu } from '../nav-menu/nav-menu';
import { changeBurgerStatus } from '../../redux/burger-slice';
import burgerClose from '../../assets/burgerClose.svg';

export function Header() {
  const { isBurgerOpen } = useSelector((store) => store.burgerSlice);
  const dispatch = useDispatch();
  const burgerRef = useRef();
  const location = useLocation();
  const booksPath =
    location.pathname.includes('/books/all') ||
    location.pathname.includes('/rules') ||
    location.pathname.includes('/contract');
  console.log('asdasd');
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.leftContainer}>
          <Link to='/books/all' className={styles.link}>
            <img src={logo} alt='logo' />
            <div className={styles.logoName}>Cleverland</div>
          </Link>
          <img
            src={isBurgerOpen ? burgerClose : burger}
            alt='burger'
            className={styles.burger}
            onClick={() => dispatch(changeBurgerStatus(!isBurgerOpen))}
            aria-hidden='true'
            data-test-id='button-burger'
            ref={burgerRef}
          />
          {!booksPath && (
            <div className={styles.navMenuContainer}>
              <NavMenu />
            </div>
          )}
          <div className={styles.library}>Библиотека</div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.greeting}>Привет, Иван!</div>
          <img src={avatar} alt='avatar' className={styles.avatar} />
        </div>
      </div>
    </header>
  );
}
