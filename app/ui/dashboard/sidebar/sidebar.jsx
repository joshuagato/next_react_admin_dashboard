import React from 'react';
import {
    MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney,
    MdWork, MdAnalytics, MdPeople, MdOutlineSettings, MdHelpCenter, MdLogout
} from 'react-icons/md';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import styles from './sidebar.module.css';

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Transitions",
                path: "/dashboard/transitions",
                icon: <MdAttachMoney />
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />,
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />,
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />,
            }
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            }
        ]
    }
];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Joshua Gato</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map(({ title, list }) => (
                    <li key={title}>
                        <span className={styles.cat}>{title}</span>
                        {list.map((item, { title }) => <MenuLink key={title} item={item} />)}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout /> Logout
            </button>
        </div>
    );
}

export default Sidebar;