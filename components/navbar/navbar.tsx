'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import navbarPic from "./navbarPic.png";
import styles from "./navbar.module.css";
import { hamburgerMenuIcon } from "../icons";

type MenuButtonProps = {
  toggleNavbar: () => void;
  icon: React.ComponentType;
};

type MobileMenuProps = {
  isNavExpanded: boolean;
  toggleNavbar: () => void;
};

type BlurOverlayProps = {
  isNavExpanded: boolean;
};

const BlurOverlay = ({ isNavExpanded }: BlurOverlayProps) => {
  return (
    <div className={
      isNavExpanded ? styles.blurOverlayVisible : styles.blurOverlayHidden}
       />
  );
};

const MenuButton = ({ toggleNavbar, icon: Icon }: MenuButtonProps) => {
  return (
    <button
      className={styles.hamburger}
      onClick={toggleNavbar}
    >
      <Icon />
    </button>
  )
};

const MobileMenu = ({ isNavExpanded, toggleNavbar }: MobileMenuProps) => {
  return (
    <div
    className={
      isNavExpanded ? `${styles.mobileMenu} ${styles.expanded}` : styles.mobileMenu
    }
    onClick={toggleNavbar}
    >
      <ul className={styles.linkContainer}>
        <li><Link href="/aboutMe">about me</Link></li>
        <li><Link href="/blog">blog</Link></li>
        <li><Link href="/guestbook">guestbook</Link></li>
        <li><Link href="/secondbrain">secondbrain</Link></li>
      </ul>
    </div>
  );
};

const Menu = () => {
  return (
      <div className={styles.menu}>
      <ul>
        <li><Link href="/aboutMe">about me</Link></li>
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
      <Link href="/" className={styles.saleePictureContainer}>
        <Image className={styles.saleePicture}
          src={navbarPic}
          width={100}
          height={100}
          alt="ilust of the salee avatar, click to move home page"
        />
      </Link>
      <MenuButton 
        toggleNavbar={toggleNavbar}
        icon={hamburgerMenuIcon} 
      />
      <MobileMenu 
        isNavExpanded={isNavExpanded} 
        toggleNavbar={toggleNavbar} 
      />
      <Menu />
      <BlurOverlay isNavExpanded={isNavExpanded} />
    </nav>
  );
};

export default Navbar;