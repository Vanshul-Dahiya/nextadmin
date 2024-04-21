import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="date" required />
        <input type="text" placeholder="Product Name" name="title" required />
        {/* <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">K</option>
          <option value="phone">P</option>
          <option value="computer">N</option>
        </select> */}
        <input type="number" placeholder="cost price" name="costPrice" />
        <input type="number" placeholder="sell price" name="sellPrice" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddProductPage;
