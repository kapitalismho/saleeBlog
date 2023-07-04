import styles from "./layout.module.css";
import Navbar from "components/navbar";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
