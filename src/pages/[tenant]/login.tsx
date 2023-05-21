import Header from '@/components/Header'
import InputField from '@/components/InputField'
import { useAppContext } from '@/contexts/AppContext'
import useApi from '@/libs/useApi'
import { Tenant } from '@/types/Tenant'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const Login = (data: Props) => {

  const { tenant, setTenant } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    setTenant(data.tenant)
  }, [])


  return (
    <>
      <Head>
        <title>{tenant?.name}</title>
      </Head>
      <Header backHref='/' color={tenant?.mainColor} />
      <InputField
        color={tenant?.mainColor as string}
        placeholder='Digite seu E-mail'
        value={email}
        onChange={setEmail}
      />
      <InputField
        color={tenant?.mainColor as string}
        placeholder='Digite seu E-mail'
        value={password}
        onChange={setPassword}
        isPassword={true}
      />

    </>
  )
}

type Props = {
  tenant: Tenant
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

  //Get Tenant
  const tenant = await useApi.useGetTenant(tenantSlug as string);
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
