import SearchInput from '@/components/SearchInput';
import styles from '../../styles/Home.module.css'
import Banner from '@/components/Banner';

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
    </div>
  )
}

export default Home;