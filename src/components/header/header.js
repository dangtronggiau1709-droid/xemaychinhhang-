"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Dòng xe", href: "/#products" },
    { label: "Giới thiệu", href: "/#about" },
    { label: "Liên hệ", href: "/#contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* LOGO & BRAND NAME PHONG CÁCH SHOWROOM XE MÁY */}
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              alt="Motorbike Showroom Logo"
              src="/images/logo.png" // File logo đại lý xe máy của bạn
              width={60}
              height={60}
              priority
              className={styles.logo}
              style={{ objectFit: "contain" }}
            />
          </Link>
          <div className={styles.brandName}>
            <span className={styles.mainText}>MOTOR ZONE</span>
            <span className={styles.subText}>PREMIUM SHOWROOM</span>
          </div>
        </div>

        {/* THANH TÌM KIẾM DÒNG XE / HÃNG XE */}
        <div className={styles.searchWrapper}>
          <div className={styles.searchBox}>
            <div className={styles.searchIcon}>🔍</div>
            <input
              type="text"
              placeholder="Tìm kiếm xe, hãng xe, phân khối..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* THANH ĐIỀU HƯỚNG MENU */}
        <nav className={styles.nav}>
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}