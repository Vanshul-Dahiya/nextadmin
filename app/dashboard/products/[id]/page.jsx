import { fetchProduct } from "@/app/lib/data";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import { updateProduct } from "@/app/lib/actions";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Change Date to </label>
          <input type="date" name="date" placeholder={product.date} />
          <label >Previous Date</label>
          <input type="text" disabled placeholder={product.date} />
          <label>Product Name</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Cost Price</label>
          <input type="text" name="costPrice" placeholder={product.costPrice} />
          <label>Sell Price</label>
          <input type="text" name="sellPrice" placeholder={product.sellPrice} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
