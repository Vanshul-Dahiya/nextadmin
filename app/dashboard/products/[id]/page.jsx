import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Date</label>
          <input type="date" name="date" />
          <label>Product Name</label>
          <input type="text" name="title" placeholder="Ghee" />
          <label>Cost Price</label>
          <input type="text" name="costPrice" placeholder="450" />
          <label>Sell Price</label>
          <input type="text" name="sellPrice" placeholder="480" />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
