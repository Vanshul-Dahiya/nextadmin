import Image from "next/image";
import styles from "./transaction.module.css";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {/* <Image src="/noavatar.png" alt="" width={40} height={40} /> */}
              Lee
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14/03/2024</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              {/* <Image src="/noavatar.png" alt="" width={40} height={40} /> */}
              Tom
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>16/03/2024</td>
            <td>$500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
