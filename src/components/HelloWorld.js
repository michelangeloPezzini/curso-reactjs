//Utilizando Css em react atraves da importacao

import styles from "./Hello.module.css";
function HelloWorld() {
  return (
    <div className={styles.content}>
      <h1 className={styles.colors}>Hello World </h1>
    </div>
  );
}

export default HelloWorld;
