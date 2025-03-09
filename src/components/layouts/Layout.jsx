import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="#">Pouria Shirali</a> | React App
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Pouria with LOVE</p>
      </footer>
    </>
  );
};

export default Layout;
