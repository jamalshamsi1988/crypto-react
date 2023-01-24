import React from 'react';
//CSS
import styles from './Coin.module.css';


const Coin = ({name,image,price,priceChange,marketCap,symbol}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name}/>
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol} >{symbol.toUpperCase()}</span>
      <span className={styles.price}>$ {price.toLocaleString()}</span>
      <span className={priceChange > 0 ? styles.greenColor : styles.redColor } >{priceChange.toFixed(2)} %</span>
      <span>$ {marketCap.toLocaleString()}</span>
    </div>
  )
}

export default Coin
