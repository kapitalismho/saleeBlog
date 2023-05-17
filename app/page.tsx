
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import homepic from "./avatar.png";
import {
  DiscordIcon,
  GmailIcon,
  GithubIcon,
  LinkedinIcon,
} from "./components/icons";

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
        <aside className={styles.iconContainer}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.discord.com/users/377814093182140416"
          >
            <DiscordIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:kapitalismho@gmail.com"
          >
            <GmailIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/kapitalismho"
          >
            <GithubIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sabin-lee-b3b190218/"
          >
            <LinkedinIcon />
          </a>
        </aside>
      </div>
    </main>
  );
}
