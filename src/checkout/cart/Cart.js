import React from 'react'

import CartItem from './CartItem'
import styles from './Cart.module.css'
import { toCurrencyFormat } from '../../utils/format-utils'

const getCartTotal = (cart) => {
  return toCurrencyFormat(cart.reduce((sum, cur) => sum + (cur.price || 0), 0))
}

function Cart(props) {
  return (
    <div className={styles.cart}>
      <ul> 
        { props.cart.map((product, i) => <CartItem cartItem={product} key={i}/>) }
        <li className={styles.cartTotal}>
          <div className={styles.totalLabel}>Total:</div> 
          <div>{getCartTotal(props.cart)}</div>
        </li>
      </ul>
    </div>
  )
}

export default Cart