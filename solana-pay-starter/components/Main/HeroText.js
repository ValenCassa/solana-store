import styles from "./styles/Main.module.css";

const HeroText = () => {
  return (
    <div className={styles.title}>
      <h2
        className={`${styles.hero} ${styles.glitch} ${styles.layers}`}
        data-text="Undefined"
      >
        <span>Undefined</span>
      </h2>
    </div>
  );
};

export default HeroText;
