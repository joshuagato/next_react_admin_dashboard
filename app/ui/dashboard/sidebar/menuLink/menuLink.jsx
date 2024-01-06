"use client"
import React from 'react';
import Link from 'next/link';
import styles from './menuLink.module.css';
import { usePathname } from 'next/navigation';

const MenuLink = ({ item }) => {
    const { title, icon, path } = item;
    const pathname = usePathname();

    return (
        <Link href={path} className={`${styles.container} ${pathname === path && styles.active}`}>
            {icon}
            {title}
        </Link>
    );
}

export default MenuLink;