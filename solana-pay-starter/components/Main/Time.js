import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getFlagEmoji } from "utils/getFlagEmoji";
import { useLocation } from "../../hooks/useLocation";
import styles from "./styles/Main.module.css";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Time = () => {
  const clockRef = useRef();
  const [clock, setClock] = useState();
  const location = useLocation();

  useEffect(() => {
    clockRef.current = setInterval(() => {
      const date = new Date().toLocaleTimeString(undefined, {
        timeZone: "America/Argentina/Buenos_Aires",
      });
      setClock(date);
    }, 1000);

    return () => clearInterval(clockRef.current);
  }, []);

  return (
    <div className={styles.clockContainer}>
      <AnimatePresence initial>
        {clock && (
          <motion.span
            className={styles.time}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            key="clock"
          >
            {clock} &bull; <span>{getFlagEmoji("AR")} Junin, Argentina</span>{" "}
            {location && (
              <>
                &bull;{" "}
                <span>
                  Last visit from {getFlagEmoji(location.country_code)}{" "}
                  {location.place}, {location.country}
                </span>
              </>
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Time;
