import React from "react";
import styles from "../scss/rating-card.scss";
import IconStar from "../svgs/icon-star.svg";
import { Link } from "react-router-dom";

const RatingCard = ({ ratingOptions, setRating }) => {
  const [activeRating, setActiveRating] = React.useState<
    EventTarget & HTMLButtonElement
  >(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (activeRating !== null) activeRating.classList.remove(styles.active);

    e.currentTarget.classList.add(styles.active);
    setActiveRating(e.currentTarget);

    const value = parseInt(e.currentTarget.value);
    setRating(value);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardButtonContainer}>
        <button className={styles.cardButtonRounded}>
          <IconStar />
        </button>
      </div>
      <h1 className={styles.cardTitle}>How did we do?</h1>
      <p className={styles.cardText}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styles.cardButtonContainer}>
        {Array.from(Array(ratingOptions).keys()).map((value, index) => {
          value += 1;
          return (
            <button
              key={index}
              onClick={handleClick}
              value={value}
              className={`${styles.cardButtonRounded} ${styles.ratingButton}`}
            >
              {value}
            </button>
          );
        })}
      </div>
      <Link to="/rating-result">
        <button className={styles.cardButton}>Submit</button>
      </Link>
    </div>
  );
};

export default RatingCard;
