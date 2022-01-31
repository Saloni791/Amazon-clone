import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from "../CartItem.module.css";
import CartContext from '../context/CartContext';
export default function CartPageItem({ id, name, price, countInStock, countInCart, image, }) {
    let [count, setCount] = useState(countInCart);
    const { removeFromCart, removeOne, addOne } = useContext(CartContext);
    const increase = () => {
        addOne(id);
    }
    const decrease = () => {
        removeOne(id);
    }



    return (
        <>
            <div className={styles.cartItem}>
                <img src={image} className={styles.img} />
                <div className={styles.name}>
                    <Link to={`/product/${id}`}>
                        {name}
                    </Link>
                </div>
                <div className={styles.price}>
                    ${price}
                </div>
                <div className={styles.quantity}>
                    <button className={styles.quantityBtn} onClick={decrease}>-</button>
                    {countInCart}
                    <button className={styles.quantityBtn} onClick={increase}>+</button>
                </div>
                <div className={styles.deleteBtn}>
                    <button onClick={() => removeFromCart(id)}>Delete</button>
                </div>
            </div>
        </>
    );
}
