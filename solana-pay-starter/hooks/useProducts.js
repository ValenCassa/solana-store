import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (url, publicKey) => {
  if (publicKey) {
    const { data } = await axios.get(url);
    return data;
  }

  return null;
};

export const useProducts = () => {
  const { publicKey } = useWallet();
  const { data: products, error } = useSWR("/api/products", (url) =>
    fetcher(url, publicKey)
  );

  return {
    products,
    error,
    isLoading: !error && !products,
  };
};
