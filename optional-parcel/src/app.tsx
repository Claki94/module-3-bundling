import React from "react";
import Logo from "./content/lighthouse-g7eb88a974_1920.jpg";
import styles from "./styles.scss";

export const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hola Mundo desde React!!</h1>
      <img src={Logo} alt="Lighthouse on the coast" className={styles.logo} />
      <p>Me encuentro en el entorno: {process.env.ENVIRONMENT_NAME}</p>
    </div>
  );
};
