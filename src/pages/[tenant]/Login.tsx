
import styles from '../../styles/Login.module.css'
import { GetServerSideProps } from 'next';
import { useAppContext } from '@/contexts/AppContext';
import { useEffect } from 'react';
import { Tenant } from '@/types/Tenant';
import { useApi } from '@/libs/useApi';
import Header from '@/components/Header';
import Head from 'next/head';

const Login = (data: Props) => {

  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, [])

  const handleSearch = (searchValue: string) => {
    console.log(searchValue)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | {tenant?.name}</title>
      </Head>
      <Header
        color={tenant?.mainColor}
        backHref={`/${tenant?.slug}`}
      />
    </div>
  )
}

export default Login;

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