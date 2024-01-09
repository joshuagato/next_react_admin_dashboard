import React from 'react';
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt='' fill />
                </div>
                IPhone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="joshuagato37" />
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" placeholder="joshuagato37@gmail.com" />
                    <label htmlFor="stock">Stock</label>
                    <input type="number" name="stock" id="stock" placeholder="23" />
                    <label htmlFor="color">Color</label>
                    <input type="text" name="color" id="color" placeholder="red" />
                    <label htmlFor="size">Size</label>
                    <input type="text" name="size" id="size" placeholder="red" />
                    <label htmlFor="cat">Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="Computers">computers</option>
                    </select>
                    <label htmlFor="desc">Description</label>
                    <textarea name="desc" id="desc" rows="10" placeholder="Description"></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
}

export default SingleProductPage;
