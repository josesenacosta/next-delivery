import SearchInput from '@/components/SearchInput';
import styles from '../../styles/Home.module.css'
import Banner from '@/components/Banner';
import ProductItem from '@/components/ProductItem';

const Home = () => {

  const handleSearch = (searchValue: string) => {
    console.log(searchValue)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>
              Seja Bem-Vindo(a) 👋
            </div>
            <div className={styles.headerSubTitle}>O que deja para hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}></div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput
            onSearch={handleSearch}
            mainColor='#FB9400'
          />
        </div>
      </header>
      <Banner />
      <div className={styles.grid}>
        <ProductItem
          data={{ id: 1, image: '/tmp/burger1.png', name: 'Texas Burger', price: "R$ 25,50", categoryName: 'Tradicional' }}
          mainColor="#FB9400"
          secondColor="#FFF9F2"
        />
        <ProductItem
          data={{ id: 2, image: '/tmp/burger1.png', name: 'Texas Burger', price: "R$ 25,50", categoryName: 'Tradicional' }}
          mainColor="#FB9400"
          secondColor="#FFF9F2"
        />
        <ProductItem
          data={{ id: 3, image: '/tmp/burger1.png', name: 'Texas Burger', price: "R$ 25,50", categoryName: 'Tradicional' }}
          mainColor="#FB9400"
          secondColor="#FFF9F2"
        />
        <ProductItem
          data={{ id: 4, image: '/tmp/burger1.png', name: 'Texas Burger', price: "R$ 25,50", categoryName: 'Tradicional' }}
          mainColor="#FB9400"
          secondColor="#FFF9F2"
        />

      </div>
    </div>
  )
}

export default Home;