import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './card-container.module.scss';
import { Card } from '../card/card';
import { fetchBooks } from '../../redux/books-slice';
import { Loader } from '../loader/loader';

export function CardContainer({ isPanel }) {
  const { allBooks, status, userInput } = useSelector((state) => state.booksSlice);
  const state = useSelector((state) => state.bookSlice);
  const { allCategories } = useSelector((state) => state.categoriesSlice);
  const bookState = state.status;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const { category } = useParams();
  const selectedCategory = allCategories.find((element) => element.path === category);
  const filteredBooks =
    category === 'all'
      ? allBooks.filter((book) => book.title.toLowerCase().includes(userInput.toLowerCase()))
      : allBooks
          .filter((book) => book.categories.includes(selectedCategory?.name))
          .filter((book) => book.title.toLowerCase().includes(userInput.toLowerCase()));
  return (
    <>
      {status === 'success' && (
        <div className={styles.cardContainer}>
          {filteredBooks.length === 0 ? (
            <div className={styles.noBooks}>В этой категории книг ещё нет</div>
          ) : (
            filteredBooks.map((book) => <Card key={book.id} book={book} isPanel={isPanel} />)
          )}
        </div>
      )}
      {status === 'loading' && <Loader />}
    </>
  );
}
