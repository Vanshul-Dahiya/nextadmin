import Search from "@/app/ui/dashboard/search/search";
import styles from "../../ui/dashboard/products/products.module.css";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Product" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Date</td>
            <td>Product Name</td>
            <td>Cost Price</td>
            <td>Sell Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13/4/2024</td>
            <td>Ghee</td>
            <td>450</td>
            <td>480</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>15/4/2024</td>
            <td>Haldi</td>
            <td>50</td>
            <td>80</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
