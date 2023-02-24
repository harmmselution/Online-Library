import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import styles from './card-container.module.scss';
import { Card } from '../card/card';
import { fetchBooks } from '../../redux/books-slice';
import { Loader } from '../loader/loader';

export function CardContainer({ isPanel }) {
  const { allBooks, status, userInput } = useSelector((state) => state.booksSlice);
  const state = useSelector((state) => state.bookSlice);
  const categoriesState = useSelector((state) => state.categoriesSlice);
  const { sortType } = useSelector((state) => state.sortSlice);
  const bookState = state.status;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const { category } = useParams();
  const selectedCategory = categoriesState.allCategories.find((element) => element.path === category);
  const filteredBooks =
    category === 'all'
      ? allBooks.filter((book) => book.title.toLowerCase().includes(userInput.toLowerCase()))
      : allBooks
          .filter((book) => book.categories.includes(selectedCategory?.name))
          .filter((book) => book.title.toLowerCase().includes(userInput.toLowerCase()));
  const location = useLocation();

  return (
    <>
      {status === 'success' && (
        <div className={styles.cardContainer}>
          {!filteredBooks.length &&
            (userInput === '' ? (
              <h1 data-test-id='empty-category' className={styles.noResult}>
                В этой категории книг ещё нет
              </h1>
            ) : (
              <h1 data-test-id='search-result-not-found' className={styles.noResult}>
                По запросу ничего не найдено
              </h1>
            ))}
          {filteredBooks
            .sort((a, b) => (sortType === 'ASC' ? a.rating - b.rating : b.rating - a.rating))
            .map((book) => (
              <Card key={book.id} book={book} isPanel={isPanel} />
            ))}
        </div>
      )}
      {status === 'loading' && categoriesState.status === 'loading' && <Loader />}
    </>
  );
}
