import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './NavMenu.module.scss';
import { ListArrowIcon } from '../svgs/svgs';
import { changeBurgerStatus, menuToggle } from '../../redux/burger-slice';
import { fetchCategories } from '../../redux/categories-slice';

export function NavMenu() {
  const location = useLocation();
  const { isBurgerOpen, isMenuOpen } = useSelector((store) => store.burgerSlice);
  const dispatch = useDispatch();
  const onMenuToggle = () => {
    dispatch(menuToggle(!isMenuOpen));
  };
  const handleOutsideClick = () => {
    dispatch(changeBurgerStatus(false));
  };
  const { status } = useSelector((state) => state.booksSlice);
  const { allCategories } = useSelector((state) => state.categoriesSlice);
  const { allBooks } = useSelector((state) => state.booksSlice);
  const success = status === 'success';
  const navigation = useNavigate();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const bookQuantity = (bookName) => allBooks.filter((el) => el.categories.includes(bookName)).length;
  return (
    <>
      <div
        type='button'
        aria-hidden='true'
        onClick={handleOutsideClick}
        className={isBurgerOpen ? styles.burgerCloseFiend : ''}
      />

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
            className={location.pathname.includes('/books') ? styles.active : styles.contract}
            aria-hidden='true'
            onClick={() =>
              location.pathname.includes('/rules')
                ? navigation('/books/all')
                : location.pathname.includes('/contract') && navigation('/books/all')
            }
          >
            Витрина книг
          </div>
          {isMenuOpen || location.pathname.includes('/books') ? (
            <div className={styles.menuArrow}>{ListArrowIcon}</div>
          ) : (
            <div>{}</div>
          )}
        </div>
        <div className={success && isMenuOpen ? styles.categoriesContainer : styles.noContainer}>
          <NavLink
            to='books/all'
            className={({ isActive }) => (isActive ? `${styles.activeCategory}` : styles.category)}
            data-test-id={isBurgerOpen ? 'burger-books' : 'navigation-books'}
          >
            Все книги
          </NavLink>

          {isMenuOpen &&
            allCategories.map((category) => (
              <NavLink
                to={`/books/${category.path}`}
                className={({ isActive }) => (isActive ? `${styles.activeCategory}` : styles.category)}
                key={category.path}
                onClick={() => dispatch(menuToggle(false))}
              >
                {category.name}
                <span className={styles.quantity}>{bookQuantity(category.name)}</span>
              </NavLink>
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
}
