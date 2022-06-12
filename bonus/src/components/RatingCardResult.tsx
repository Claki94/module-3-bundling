import IllustrationThankYou from "../svgs/illustration-thank-you.svg";
import styles from "../scss/rating-card.scss";
import React from "react";

export const RatingCardResult = ({ ratingOptions, rating }) => {
  return (
    <div className={`${styles.cardContainer} ${styles.cardResult}`}>
      <IllustrationThankYou className={styles.thankYouSvg} />
      <p className={styles.resultText}>You selected {rating} out of {ratingOptions}</p>
      <h1 className={`${styles.cardTitle} ${styles.textCenter}`}>Thank you!</h1>
      <p className={`${styles.cardText} ${styles.textCenter}`}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default RatingCardResult;
