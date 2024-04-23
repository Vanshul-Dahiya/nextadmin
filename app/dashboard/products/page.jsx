import Search from "@/app/ui/dashboard/search/search";
import styles from "../../ui/dashboard/products/products.module.css";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";
import { auth } from "@/app/auth";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { user } = await auth();
  console.log(user);

  const { count, products } = await fetchProducts(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Product" />
        {user.isAdmin ? (
          <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        ) : (
          ""
        )}
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
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.date.toLocaleString().slice(0, 9)}</td>
              <td>{product.title}</td>
              <td>{product.costPrice}</td>
              <td>{product.sellPrice}</td>
              <td>
                {user.isAdmin ? (
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={product.id} />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                  </div>
                ) : (
                  <span className={styles.span}>Restricted</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;
