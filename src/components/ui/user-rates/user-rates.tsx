import styles from '../../../pages/book--page/book-page.module.scss';
import goldStar from '../../../assets/goldStar1.svg';
import whiteStar from '../../../assets/whiteStar.svg';
import { getDate } from '../../date-parser/date-parser';
import { IUserComments } from '../../../interfaces/interfaces';

export const UserRates: React.FC<IUserComments> = ({ comments }) => {
  return (
    <div className={styles.rateContainer}>
      {comments.map((comment) => (
        <div className={styles.user2}>
          <div className={styles.user}>
            <img src={comment.user.avatarUrl} alt='userAvatar' />
            <p className={styles.userFio}>
              {comment.user.firstName} {comment.user.lastName}
            </p>
            <p className={styles.date}>{getDate(comment.createdAt)}</p>
          </div>
          <div className={styles.imageContainer1}>
            <img src={comment.rating >= 1 ? goldStar : whiteStar} alt='star' />
            <img src={comment.rating >= 2 ? goldStar : whiteStar} alt='star' />
            <img src={comment.rating >= 3 ? goldStar : whiteStar} alt='star' />
            <img src={comment.rating >= 4 ? goldStar : whiteStar} alt='star' />
            <img src={comment.rating >= 5 ? goldStar : whiteStar} alt='star' />
          </div>
          <p className={styles.feedback}>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};
