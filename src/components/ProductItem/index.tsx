import { Product } from '@/types/Product'
import styles from './ProductItem.module.css'
import Link from 'next/link';
import { useAppContext } from '@/contexts/AppContext';

type Props = {
  data: Product;
}

const ProductItem = ({ data }: Props) => {

  const { tenant } = useAppContext()

  return (
    <Link className={styles.container} href={`/${tenant?.slug}/product/${data.id}`}>
      <div className={styles.head} style={{ backgroundColor: tenant?.mainColor }}></div>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src="/tmp/burger1.png" alt="" />
        </div>
        <div className={styles.catName}>{data.categoryName}</div>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.price} style={{ color: tenant?.mainColor }}>{data.price}</div>
      </div>
    </Link >

  )
}

export default ProductItem
