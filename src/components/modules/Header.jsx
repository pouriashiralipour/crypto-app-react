import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Crypto App</h1>
      <p>
        <a href="#">PouriaShirali</a>|React
      </p>
    </div>
  );
};

export default Header;
