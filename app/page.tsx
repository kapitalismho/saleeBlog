
import styles from "./page.module.css";

import Link from "next/link";
import Image from "next/image";

import homepic from "./avatar.jpg";

export default function HomePage() {
  return (
    <div>
      <Link href="/aboutMe">
        <div>
          <h1>
            <p>SALEE</p>
          </h1>
        </div>
        <div>
          <Image
            src = {homepic}
            alt = "Picture of the salee avatar"
            />
        </div>
      </Link>
    </div>
  );
}
