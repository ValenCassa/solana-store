import HeroText from "./HeroText";
import styles from "./styles/Main.module.css";
import Time from "./Time";
import BlurryCircle from "public/svg/BlurryCircle.svg";

const MainSection = () => {
  return (
    <section className={styles.container}>
      <Time />
      <div className={styles.titleSection}>
        <BlurryCircle />
        <HeroText />
        <p className={styles.description}>
          Didn&apos;t know a Circle can look that cool?
        </p>
      </div>
    </section>
  );
};

export default MainSection;
