import styles from './Header.module.css'
import BackIcon from './BackIcon.svg'
import Link from 'next/link'

type Props = {
  backHref: string;
  color: string | undefined;
  title?: string;
}

const Header = ({ backHref, color, title }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerLeft}>
        <Link href={backHref}>
          <BackIcon color={color} />
        </Link>
      </div>
      <div className={styles.headerCenter}>
        {title && <div className={styles.title}>{title}</div>}
      </div>
      <div className={styles.headerRight}></div>
    </div>
  )
}

export default Header
