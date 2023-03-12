import { useState } from 'react';
import styles from './buttons.module.scss';
import search from '../../assets/search.svg';
import rate from '../../assets/rate.svg';
import { ListSvg, PanelSvg, RateSvg, SearchSvg } from '../svgs/svgs';
import { changeSearchStatus } from '../../redux/burger-slice';
import closeSearch from '../../assets/closeSearch.svg';
import { bookSearch, changeUserInput } from '../../redux/books-slice';
import { sortToggler } from '../../redux/sort-slice';
import { IButtons } from '../../interfaces/interfaces';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';
import { SortType, Status } from '../../enums/enums';

export const Buttons: React.FC<IButtons> = ({ isPanel, setIsPanel }) => {
  const { isSearchOpen } = useAppSelector((store) => store.burgerSlice);
  const dispatch = useAppDispatch();
  const [isFocus, setIsFocus] = useState(false);
  const onChangeSearchStatus = () => {
    dispatch(changeSearchStatus(!isSearchOpen));
    setIsFocus(false);
  };
  const { status, userInput } = useAppSelector((state) => state.booksSlice);
  const { sortType } = useAppSelector((state) => state.sortSlice);
  const onChangeValue = (userInput: string) => {
    dispatch(changeUserInput(userInput));
    dispatch(bookSearch(userInput.toLowerCase()));
  };
  const sortByRating = () => {
    if (sortType === SortType.ASC) {
      dispatch(sortToggler(SortType.DESC));
    } else dispatch(sortToggler(SortType.ASC));
  };

  return (
    <>
      {status === Status.SUCCESS && (
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
              <div className={sortType === SortType.DESC ? styles.rate : styles.rateAsc}>
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
      )}
    </>
  );
};
