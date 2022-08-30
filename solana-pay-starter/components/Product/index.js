import styles from "./styles/Products.module.css";
import { useProducts } from "hooks/useProducts";
import useIPFS from "hooks/useIPFS";
import { useTransaction } from "hooks/useTransaction";

const ProductContainer = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className={styles.products}>
      <h2 className={styles.title}>Buy</h2>
      <div className={styles.container}>
        <FreeProduct
          image_url={
            "https://products.ls.graphics/mesh-gradients/images/56.-Color-Smoke.jpg"
          }
          hash="QmVapFVrwmysZNA8wsWcwtfVQU7MPTweBpcGZA8pXPPGGN"
          filename="assets.rar"
        />
        {products.map((product) => (
          <>
            <Product key={product.id} {...product} />
            <Product key={product.id} {...product} />
            <Product key={product.id} {...product} />
            <Product key={product.id} {...product} />
            <Product key={product.id} {...product} />
            <Product key={product.id} {...product} />
            <Product key={product.id} {...product} />
          </>
        ))}
      </div>
    </section>
  );
};

export const Product = ({ id, price, image_url, free }) => {
  return (
    <div className={styles.upperContainer}>
      <div className={styles.productContainer}>
        <div
          className={styles.item}
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        />
        <div
          className={styles.itemBehind}
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        />
      </div>
      {free ? (
        <div className={styles.buy}>Free</div>
      ) : (
        <PayButton
          itemID={id}
          price={price}
          hash={"QmVapFVrwmysZNA8wsWcwtfVQU7MPTweBpcGZA8pXPPGGN"}
          filename={"assets.rar"}
        />
      )}
    </div>
  );
};

const PayButton = ({ itemID, hash, filename, price }) => {
  const file = useIPFS(hash, filename);
  const { paid, loading, processTransaction } = useTransaction({ itemID });

  const paidRender = () => {
    return (
      <a download={filename} href={file}>
        View
      </a>
    );
  };

  const notPaid = () => {
    return (
      <button disabled={loading} onClick={processTransaction}>
        Buy ${price}
      </button>
    );
  };

  return <div className={styles.buy}>{paid ? paidRender() : notPaid()}</div>;
};

const FreeProduct = ({ image_url, hash, filename }) => {
  const file = useIPFS(hash, filename);

  return (
    <a href={file} download={filename} className={styles.download}>
      <Product image_url={image_url} free />
    </a>
  );
};

export default ProductContainer;
