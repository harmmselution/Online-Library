import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './buttons.module.scss';
import search from '../../assets/search.svg';
import rate from '../../assets/rate.svg';
import { ListSvg, PanelSvg } from '../svgs/svgs';
import { changeSearchStatus } from '../../redux/burger-slice';
import closeSearch from '../../assets/closeSearch.svg';

export function Buttons({ isPanel, setIsPanel }) {
  const { isSearchOpen } = useSelector((store) => store.burgerSlice);
  const dispatch = useDispatch();
  const formRef = useRef();
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');
  const onChangeSearchStatus = () => {
    dispatch(changeSearchStatus(!isSearchOpen));
    setIsFocus(false);
    setValue('');
  };
  const { allBooks, status } = useSelector((state) => state.booksSlice);

  return (
    status === 'success' && (
      <div className={styles.buttons}>
        <div className={styles.leftButtons}>
          <div aria-hidden='true' className={isSearchOpen ? styles.openedSearch : styles.searchButton}>
            <input
              type='text'
              placeholder='Поиск книги или автора...'
              className={isSearchOpen ? styles.openedInput : styles.searchInput}
              onFocus={() => setIsFocus(true)}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              ref={formRef}
              data-test-id='input-search'
            />
            {isSearchOpen ? (
              <img
                src={closeSearch}
                alt='close'
                className={isSearchOpen ? styles.searchClose : styles.searchIcon}
                onClick={() => dispatch(changeSearchStatus(false))}
                aria-hidden='true'
                data-test-id='button-search-close'
              />
            ) : (
              <img src={search} alt='search' className={styles.searchIcon} />
            )}
          </div>
          <div
            className={isSearchOpen ? styles.closeButtons : styles.littleSearch}
            data-test-id='button-search-open'
            aria-hidden='true'
            onClick={onChangeSearchStatus}
          >
            <img src={search} alt='littleSearch' />
          </div>
          <div className={`${styles.rateButton}`}>
            По рейтингу
            <img src={rate} alt='rating' className={styles.rate} />
          </div>
          <div className={isSearchOpen ? styles.closeButtons : styles.littleRate}>
            <img src={rate} alt='littleRate' />
          </div>
        </div>
        <div className={styles.rightButtons}>
          <div
            data-test-id='button-menu-view-window'
            className={
              isSearchOpen ? styles.closeButtons : `${styles.panelButton} ${isPanel ? styles.panelActive : ''}`
            }
            aria-hidden='true'
            onClick={() => setIsPanel(true)}
          >
            <PanelSvg />
          </div>
          <div
            className={
              isSearchOpen
                ? `${styles.closeButtons}`
                : `${styles.listButton} ${isPanel === false ? styles.panelActive : ''}`
            }
            onClick={() => setIsPanel(false)}
            aria-hidden='true'
            data-test-id='button-menu-view-list'
          >
            <ListSvg />
          </div>
        </div>
      </div>
    )
  );
}