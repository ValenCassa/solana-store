import { useWallet } from "@solana/wallet-adapter-react";
import styles from "./styles/Wallet.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Wallet = () => {
  const { publicKey } = useWallet();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence initial>
      <motion.a
        className={styles.walletContainer}
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        key={"wallet"}
      >
        <div className={styles.wallet}>
          {!publicKey ? (
            <WalletMultiButton className={styles.select} />
          ) : (
            <p className={styles.select}>Connected!</p>
          )}
        </div>
      </motion.a>
    </AnimatePresence>,
    document.body
  );
};

export default Wallet;
