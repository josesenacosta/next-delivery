/* eslint-disable */
import SearchInput from '@/components/SearchInput';
import styles from '../../styles/Home.module.css'
import Banner from '@/components/Banner';
import ProductItem from '@/components/ProductItem';
import { GetServerSideProps } from 'next';
import { useAppContext } from '@/contexts/AppContext';
import { useEffect } from 'react';
import { Tenant } from '@/types/Tenant';
import { useApi } from '@/libs/useApi';

const Home = (data: Props) => {

  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, [])

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
            <div className={styles.menuButton} style={{ color: tenant?.mainColor }}></div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput
            onSearch={handleSearch}

          />
        </div>
      </header>
      <Banner />
      <div className={styles.grid}>
        <ProductItem
          data={{ id: 1, image: '/tmp/burger1.png', name: 'Texas Burger', price: "R$ 25,50", categoryName: 'Tradicional' }}
        />
        <ProductItem
          data={{ id: 2, image: '/tmp/burger1.png', name: 'Texas Burger', price: "R$ 25,50", categoryName: 'Tradicional' }}
        />
        <ProductItem
          data={{ id: 3, image: '/tmp/burger1.png', name: 'Texas Burger', price: "R$ 25,50", categoryName: 'Tradicional' }}
        />
        <ProductItem
          data={{ id: 4, image: '/tmp/burger1.png', name: 'Texas Burger', price: "R$ 25,50", categoryName: 'Tradicional' }}
        />
        <ProductItem
          data={{ id: 5, image: '/tmp/burger1.png', name: 'Texas Burger', price: "R$ 25,50", categoryName: 'Tradicional' }}
        />
        <ProductItem
          data={{ id: 6, image: '/tmp/burger1.png', name: 'Texas Burger', price: "R$ 25,50", categoryName: 'Tradicional' }}
        />

      </div>
    </div>
  )
}

export default Home;

type Props = {
  tenant: Tenant
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi();

  //Get Tenant
  const tenant = await api.getTenant(tenantSlug as string);
  if (!tenant) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props: {
      tenant
    }
  }
}