import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './card-container.module.scss';
import { Card } from '../card/card';
import { fetchBooks } from '../../redux/books-slice';
import { Loader } from '../loader/loader';
import { ICardContainer } from '../../interfaces/interfaces';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';
import { Status, SortType } from '../../enums/enums';

export const CardContainer: React.FC<ICardContainer> = ({ isPanel }) => {
  const { allBooks, status, userInput } = useAppSelector((state) => state.booksSlice);
  const { allCategories } = useAppSelector((state) => state.categoriesSlice);
  const { sortType } = useAppSelector((state) => state.sortSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const { category } = useParams();

  const selectedCategory = allCategories.find((element) => element.path === category);

  const filteredBooks =
    category === 'all' || !selectedCategory
      ? allBooks.filter((book) => book.title.toLowerCase().includes(userInput.toLowerCase()))
      : allBooks.filter((book) => book.categories.includes(selectedCategory.name));
  allBooks.filter((book) => book.title.toLowerCase().includes(userInput.toLowerCase()));

  return (
    <>
      {status === Status.SUCCESS && (
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
            .sort((a, b) => (sortType === SortType.ASC ? a.rating - b.rating : b.rating - a.rating))
            .map((book) => (
              <Card key={Math.random() + book.id} book={book} isPanel={isPanel} />
            ))}
        </div>
      )}
      {status === Status.LOADING && <Loader />}
    </>
  );
};
