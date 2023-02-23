import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './buttons.module.scss';
import search from '../../assets/search.svg';
import rate from '../../assets/rate.svg';
import { ListSvg, PanelSvg, RateSvg, SearchSvg } from '../svgs/svgs';
import { changeSearchStatus } from '../../redux/burger-slice';
import closeSearch from '../../assets/closeSearch.svg';
import { bookSearch, changeUserInput, sortAscending, sortDescending } from '../../redux/books-slice';
import { sortToggler } from '../../redux/sort-slice';

export function Buttons({ isPanel, setIsPanel }) {
  const { isSearchOpen } = useSelector((store) => store.burgerSlice);
  const dispatch = useDispatch();
  const formRef = useRef();
  const [isFocus, setIsFocus] = useState(false);
  const onChangeSearchStatus = () => {
    dispatch(changeSearchStatus(!isSearchOpen));
    setIsFocus(false);
  };
  const { allBooks, status, userInput, descendingBooks, ascendingBooks } = useSelector((state) => state.booksSlice);
  const { sortType } = useSelector((state) => state.sortSlice);
  const onChangeValue = (text) => {
    dispatch(changeUserInput(text));
    dispatch(bookSearch(text.toLowerCase()));
  };
  const sortByRating = () => {
    if (sortType === 'ASC') {
      dispatch(sortToggler('DESC'));
    } else dispatch(sortToggler('ASC'));
  };

  return (
    status === 'success' && (
      <div className={styles.buttons}>
        <div className={styles.leftButtons}>
          <div aria-hidden='true' className={isSearchOpen ? styles.openedSearch : styles.searchButton}>
            <input
              type='text'
              placeholder='Поиск книги или автора…'
              className={isSearchOpen ? styles.openedInput : styles.searchInput}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(e) => onChangeValue(e.target.value)}
              value={userInput}
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
              <div className={isFocus ? styles.inFocusSearch : styles.searchIcon}>
                <SearchSvg />
              </div>
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
          <div
            className={`${styles.rateButton}`}
            aria-hidden='true'
            onClick={sortByRating}
            data-test-id='sort-rating-button'
          >
            По рейтингу
            <div className={sortType === 'DESC' ? styles.rate : styles.rateAsc}>
              <RateSvg />
            </div>
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
