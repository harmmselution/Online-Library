import React from 'react';
import goldStar from '../../../assets/goldStar1.svg';
import whiteStar from '../../../assets/whiteStar.svg';
import styles from '../../card/card.module.scss';

export function Rating({ rating }) {
  return (
    rating && (
      <>
        <img src={rating >= 1 ? goldStar : whiteStar} alt='star' />
        <img src={rating >= 2 ? goldStar : whiteStar} alt='star' />
        <img src={rating >= 3 ? goldStar : whiteStar} alt='star' />
        <img src={rating >= 4 ? goldStar : whiteStar} alt='star' />
        <img src={rating >= 5 ? goldStar : whiteStar} alt='star' />
      </>
    )
  );
}
