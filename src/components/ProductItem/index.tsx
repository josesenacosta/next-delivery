import { Product } from '@/types/Product'
import styles from './ProductItem.module.css'
import Link from 'next/link';

type Props = {
  data: Product;
  mainColor: string;
  secondColor: string;
}

const ProductItem = ({ data, mainColor, secondColor }: Props) => {
  return (
    <Link className={styles.container} href={`/next-delivery/product/${data.id}`}>
      <div className={styles.head} style={{ backgroundColor: secondColor }}></div>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src="/tmp/burger1.png" alt="" />
        </div>
        <div className={styles.catName}>{data.categoryName}</div>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.price} style={{ color: mainColor }}>{data.price}</div>
      </div>
    </Link >

  )
}

export default ProductItem
