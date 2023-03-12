import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { fetchBook } from '../../redux/book-slice';
import styles from './book-page.module.scss';
import arrow from '../../assets/arrow.svg';
import { changeRatesStatus } from '../../redux/burger-slice';
import { Slider } from '../../components/swiper/slider';
import { Rating } from '../../components/ui/rating/rating';
import { Loader } from '../../components/loader/loader';
import { MoreInfo } from '../../components/ui/more-info/more-info';
import { UserRates } from '../../components/ui/user-rates/user-rates';
import { getShortDate } from '../../components/date-parser/date-parser';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { Status } from '../../enums/enums';

export const BookPage: React.FC = () => {
  const { isRatesOpen } = useAppSelector((store) => store.burgerSlice);
  const dispatch = useAppDispatch();
  const onChangeRatesStatus = () => {
    dispatch(changeRatesStatus(!isRatesOpen));
  };

  const { id, category } = useParams();
  const { book, status } = useAppSelector((state) => state.bookSlice);
  const { allCategories } = useAppSelector((state) => state.categoriesSlice);
  useEffect(() => {
    if (id) {
      dispatch(fetchBook(id));
    }
  }, [dispatch, id]);
  //??

  const currentCategory = allCategories.find((el) => el.path === category);
  const selectedCategoryName = () => {
    if (category && category === 'all') {
      return { id: 0, path: 'all', name: 'Все книги' };
    }

    return allCategories.find((el) => el.path === category);
  };

  return (
    <>
      <div className={styles.greyComponent}>
        <div className={styles.greyContainer}>
          <p className={styles.greyText}>
            <NavLink to={`/books/${selectedCategoryName()?.path}`} data-test-id='breadcrumbs-link'>
              {category === 'all' ? 'Все книги' : currentCategory?.name}
            </NavLink>
            <b>/</b>
            <span data-test-id='book-name'>{book?.title || ''}</span>
          </p>
        </div>
      </div>

      {status === Status.SUCCESS && book && (
        <>
          <div className={styles.container}>
            <div className={styles.book}>
              {book.images.length > 1 ? (
                <Slider gallery={book.images} />
              ) : (
                <img src={`https://strapi.cleverland.by${book.images[0].url}`} alt='' data-test-id='slide-big' />
              )}
            </div>
            <div className={styles.title}>
              <h2 className={styles.bookName} data-test-id='book-title'>
                {book.title}
              </h2>
              {book.authors.map((author) => (
                <p key={`${author} -  ${book.id}`} className={styles.author}>
                  {author}, {book.issueYear}
                </p>
              ))}

              <button type='button' className={book.booking?.order ? styles.bookedButton : styles.orderButton}>
                {book.booking?.order ? `Занята до ${getShortDate(book.booking.dateOrder)}` : 'Забронировать'}
              </button>
            </div>
            <div className={styles.about}>
              <h3 className={styles.aboutBook}>О книге</h3>
              <p className={styles.algoritm}>{book.description}</p>
            </div>
          </div>

          <section className={book.images.length > 1 ? styles.rating : ''}>
            <h3>Рейтинг</h3>
            <div className={styles.imageContainer}>
              {book.rating ? (
                <>
                  <Rating rating={book.rating} />
                  <span className={styles.number}>{book.rating}</span>
                </>
              ) : (
                <p className={styles.noRating}>ещё нет оценок</p>
              )}
            </div>
          </section>
          <MoreInfo info={{ ...book }} />
          <section className={styles.ratingSection}>
            <h3 className={styles.feedbacks}>
              Отзывы <span className={styles.number2}>{book.comments ? book.comments.length : 0}</span>
              <img
                src={arrow}
                alt='arrow'
                className={isRatesOpen ? `${styles.ratesArrow} ${styles.rotation}` : `${styles.ratesArrow}`}
                onClick={onChangeRatesStatus}
                aria-hidden='true'
                data-test-id='button-hide-reviews'
              />
            </h3>
            {isRatesOpen && book.comments && <UserRates comments={book.comments} />}
            <button type='button' className={styles.buttonReview} data-test-id='button-rating'>
              Оценить книгу
            </button>
          </section>
        </>
      )}

      {status === Status.LOADING && <Loader />}
    </>
  );
};
