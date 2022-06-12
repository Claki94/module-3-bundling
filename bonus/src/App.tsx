import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RatingCard from "./components/RatingCard";
import RatingCardResult from "./components/RatingCardResult";
import styles from "./scss/app.scss";

const App = () => {
  const ratingOptions: number = 5;
  const [rating, setRating] = React.useState<number>(0);

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RatingCard ratingOptions={ratingOptions} setRating={setRating} />
            }
          />
          <Route
            path="/rating-result"
            element={
              <RatingCardResult ratingOptions={ratingOptions} rating={rating} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
