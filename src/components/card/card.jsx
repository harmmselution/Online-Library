import { Link, NavLink, useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './card.module.scss';
import goldStar from '../../assets/goldStar1.svg';
import whiteStar from '../../assets/whiteStar.svg';
import { getShortDate } from '../date-parser/date-parser';
import { Rating } from '../ui/rating/rating';
import '../../index.css';

export function Card({ book, isPanel }) {
  const { allBooks, status } = useSelector((state) => state.booksSlice);
  const { userInput } = useSelector((state) => state.booksSlice);
  const { allCategories } = useSelector((state) => state.categoriesSlice);

  function highlightText(text, input) {
    const regex = new RegExp(`(${input})`, 'gi');
    const highlightedText = text.replace(regex, '<span class="highlight" data-test-id="highlight-matches">$1</span>');
    return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  }
  const params = useParams();
  console.log(params);
  return (
    <NavLink
      to={`/books/${params.category}/${book.id}`}
      className={isPanel === false ? `${styles.bookHref}` : ''}
      data-test-id='card'
    >
      <div className={[styles.book, isPanel ? styles.card : styles.listItem].join(' ')}>
        <div className={styles.image}>
          <img src={`https://strapi.cleverland.by${book.image?.url}`} alt='книга' className={styles.BookImg} />
        </div>
        <div className={styles.info}>
          {book.rating ? (
            <div className={styles.rating}>
              <Rating rating={book.rating} />
            </div>
          ) : (
            <p className={styles.noRate}>ещё нет оценок</p>
          )}
          <div className={styles.heading}>
            <h2 className={styles.title} data-test-id='book-title'>
              {highlightText(book.title, userInput)}
            </h2>
            {book.authors.map((author) => (
              <p key={`${author} ${Date.now()}`} className={styles.author}>
                {author},{book.issueYear}
              </p>
            ))}
          </div>

          {book.booking ? (
            <button type='button' className={styles.engagedBtn}>
              Занята до {getShortDate(book.booking.dateOrder)}
            </button>
          ) : book.ordered ? (
            <button type='button' className={styles.orderedBtn}>
              {book.ordered}
            </button>
          ) : (
            <button type='button' className={styles.btn}>
              Забронировать
            </button>
          )}
        </div>
      </div>
    </NavLink>
  );
}
