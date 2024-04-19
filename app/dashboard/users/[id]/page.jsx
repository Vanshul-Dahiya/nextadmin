import Image from "next/image";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        {/* <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />{" "}
        </div> */}
        John
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>UserName</label>
          <input type="text" name="username" placeholder="John" />
          <label>Email</label>
          <input type="email" name="email" placeholder="John@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
