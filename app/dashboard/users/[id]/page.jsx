import React from 'react';
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';

const SingleUSerPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt='' fill />
                </div>
                Joshua Gato
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="joshuagato37" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="joshuagato37@gmail.com" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="3712@ITstd" />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" placeholder="+233244306303" />
                    <label htmlFor="address">Address</label>
                    <textarea name="address" id="address" placeholder="Accra"></textarea>
                    <label htmlFor="isAdmin">Is Admin</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label htmlFor="isActive">Is Active</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
}

export default SingleUSerPage;
