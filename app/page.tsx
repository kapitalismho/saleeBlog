import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import homepic from "./avatar.png";
import {
  DiscordIcon,
  GmailIcon,
  GithubIcon,
  LinkedinIcon,
  IconWithLink,
} from "components/icons";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.link}>
        <Link href="/aboutMe">
          <Image
            className={styles.image}
            src={homepic}
            width={1320}
            height={1614}
            quality={90}
            alt="ilust of the salee avatar, click to move aboutme page"
            priority
          />
        </Link>
        <aside>
          <address className={styles.icons}>
            <IconWithLink
              href="https://www.discord.com/users/377814093182140416"
              icon={DiscordIcon}
              description="Discord"
            />
            <IconWithLink
              href="mailto:kapitalismho@gmail.com"
              icon={GmailIcon}
              description="Email"
            />
            <IconWithLink
              href="https://github.com/kapitalismho"
              icon={GithubIcon}
              description="Github"
            />
            <IconWithLink
              href="https://www.linkedin.com/in/sabin-lee-b3b190218/"
              icon={LinkedinIcon}
              description="Linkedin"
            />
          </address>
        </aside>
      </div>
    </main>
  );
};

export default HomePage;
