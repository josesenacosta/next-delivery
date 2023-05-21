import Header from '@/components/Header'
import { useAppContext } from '@/contexts/AppContext'
import { useApi } from '@/libs/useApi'
import { Tenant } from '@/types/Tenant'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { useEffect } from 'react'

const Login = (data: Props) => {

  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant)
  }, [])


  return (
    <>
      <Head>
        <title>{tenant?.name}</title>
      </Head>
      <Header backHref='/' color={tenant?.mainColor} />
    </>
  )
}

type Props = {
  tenant: Tenant
}

const getTenant = (tenantSlug: string): boolean | Tenant => {
  switch (tenantSlug) {
    case 'next-delivery':
      return {
        slug: 'next-delivery',
        name: 'NextDelivery',
        mainColor: '#FB9400',
        secondColor: '#FFF9F2'
      }
      break;
    case 'art-burger':
      return {
        slug: 'art-burger',
        name: 'ArtBurger',
        mainColor: '#9139BA',
        secondColor: '#F0E3F6'
      }
      break;
    default: return false
  }
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

  //Get Tenant
  const tenant = await getTenant(tenantSlug as string);
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

export default Login
