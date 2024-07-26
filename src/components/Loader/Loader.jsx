import { DNA } from "react-loader-spinner";
import styles from "../Loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loading}>Loading...</div>
      <div className={styles.loadingLoader}>
        <DNA
          visible={true}
          height="300"
          width="300"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  );
};
export default Loader;
