import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './NavMenu.module.scss';
import { ListArrowIcon } from '../svgs/svgs';
import { changeBurgerStatus, menuToggle } from '../../redux/burger-slice';
import { fetchCategories } from '../../redux/categories-slice';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';
import { Status } from '../../enums/enums';

export const NavMenu: React.FC = () => {
  const location = useLocation();
  const { isBurgerOpen, isMenuOpen } = useAppSelector((store) => store.burgerSlice);
  const dispatch = useAppDispatch();
  const onMenuToggle = () => {
    dispatch(menuToggle(!isMenuOpen));
  };
  const handleOutsideClick = () => {
    dispatch(changeBurgerStatus(false));
  };
  const { status, allBooks } = useAppSelector((state) => state.booksSlice);
  const { allCategories } = useAppSelector((state) => state.categoriesSlice);

  const navigation = useNavigate();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const bookQuantity = (bookName: string) => allBooks.filter((el) => el.categories.includes(bookName)).length;

  const burgerStatusToggler = () => {
    // dispatch(menuToggle(false));
    dispatch(changeBurgerStatus(false));
  };

  return (
    <>
      <div aria-hidden='true' onClick={handleOutsideClick} className={isBurgerOpen ? styles.burgerCloseFiend : ''} />

      <nav
        className={isBurgerOpen ? `${styles.navBurgerMenu}` : `${styles.navMenu}`}
        aria-hidden='true'
        data-test-id={isBurgerOpen ? 'burger-navigation' : ''}
      >
        <div
          className={styles.showCase}
          aria-hidden='true'
          onClick={onMenuToggle}
          data-test-id={isBurgerOpen ? 'burger-showcase' : 'navigation-showcase'}
        >
          <div
            className={
              location.pathname.includes('/books') ? `${styles.active} ${styles.activeShowCase}` : styles.contract
            }
            aria-hidden='true'
            onClick={() =>
              location.pathname.includes('/rules')
                ? navigation('/books/all')
                : location.pathname.includes('/contract') && navigation('/books/all')
            }
          >
            Витрина книг
            {location.pathname.includes('/books') ? (
              <div className={isMenuOpen ? styles.menuArrow : styles.arrowDown}>
                <ListArrowIcon />
              </div>
            ) : (
              <div>{}</div>
            )}
          </div>
        </div>
        <div className={status === Status.SUCCESS && isMenuOpen ? styles.categoriesContainer : styles.noContainer}>
          <NavLink
            to='books/all'
            className={({ isActive }) => (isActive ? `${styles.activeCategory}` : styles.category)}
            data-test-id={isBurgerOpen ? 'burger-books' : 'navigation-books'}
            onClick={burgerStatusToggler}
          >
            Все книги
          </NavLink>

          {isMenuOpen &&
            allCategories.map((category) => (
              <div className={styles.categories} key={Math.random() * category.id}>
                <NavLink
                  to={`/books/${category.path}`}
                  className={({ isActive }) => (isActive ? `${styles.activeCategory}` : styles.category)}
                  key={category.path}
                  onClick={burgerStatusToggler}
                  data-test-id={isBurgerOpen ? `burger-${category.path}` : `navigation-${category.path}`}
                >
                  {category.name}
                </NavLink>
                <span
                  className={styles.quantity}
                  data-test-id={
                    isBurgerOpen
                      ? `burger-book-count-for-${category.path}`
                      : `navigation-book-count-for-${category.path}`
                  }
                >
                  {bookQuantity(category.name)}
                </span>
              </div>
            ))}
        </div>

        <NavLink
          to='/rules'
          className={({ isActive }) => (isActive ? `${styles.active}` : styles.rules)}
          onClick={() => dispatch(menuToggle(false))}
          data-test-id={isBurgerOpen ? 'burger-terms' : 'navigation-terms'}
        >
          Правила пользования
        </NavLink>
        <NavLink
          to='/contract'
          className={({ isActive }) => (isActive ? `${styles.active}` : styles.contract)}
          onClick={() => dispatch(menuToggle(false))}
          data-test-id={isBurgerOpen ? 'burger-contract' : 'navigation-contract'}
        >
          Договор оферты
        </NavLink>
        {isBurgerOpen && (
          <>
            <div className={styles.profile}>Профиль</div>
            <div className={styles.contract}>Выход</div>
          </>
        )}
      </nav>
    </>
  );
};
