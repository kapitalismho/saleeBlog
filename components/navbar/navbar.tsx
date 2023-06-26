'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

type MenuButtonProps = {
  toggleNavbar: () => void;
};

type MenuProps = {
  isNavExpanded: boolean;
  toggleNavbar: () => void;
};

const MenuButton = ({ toggleNavbar }: MenuButtonProps) => {
  return (
    <button
      className={styles.hamburger}
      onClick={toggleNavbar}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
};

const Menu = ({ isNavExpanded, toggleNavbar }: MenuProps) => {
  return (
      <div
      className={
        isNavExpanded ? `${styles.menu} ${styles.expanded}` : styles.menu
      }
      onClick={toggleNavbar}
      >
      <ul>
        <li><Link href="/aboutMe">aboutme</Link></li>
        <li><Link href="/blog">blog</Link></li>
        <li><Link href="/guestbook">guestbook</Link></li>
        <li><Link href="/secondbrain">secondbrain</Link></li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const toggleNavbar = () => setIsNavExpanded(!isNavExpanded);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.saleePicture}>home</Link>
      <MenuButton 
        toggleNavbar={toggleNavbar} 
      />
      <Menu 
        isNavExpanded={isNavExpanded} 
        toggleNavbar={toggleNavbar} 
      />
    </nav>
  );
};

export default Navbar;