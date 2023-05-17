
import styles from "./page.module.css";

import Link from "next/link";
import Image from "next/image";

import homepic from "./avatar.png";

export default function HomePage() {
  return (
    <main className={styles.topContainer}>
      <div className={styles.linkContainer}>
        <Link href="/aboutMe">
            <Image className={styles.imageContainer}
              src={homepic}
              width={1320}
              height={1614}
              alt="ilust of the salee avatar, click to move aboutme page"
              />
        </Link>
      </div>
    </main>
  );
}
