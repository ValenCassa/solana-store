import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"; // <-- Available networks
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"; // <-- It'll prompt the user to connect the wallet if it's not connected.
import {
  ConnectionProvider, // <-- Takes an RPC endpoint and provides a connection to the cluster.
  WalletProvider, // <-- Takes a list of wallet adapters.
} from "@solana/wallet-adapter-react";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js"; // <-- Generates RPC endpoint based on the network provided.
import { useMemo } from "react";

const NetworkProvider = ({ children }) => {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default NetworkProvider;
