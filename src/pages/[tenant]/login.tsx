import Header from '@/components/Header'
import InputField from '@/components/InputField'
import { useAppContext } from '@/contexts/AppContext'
import useApi from '@/libs/useApi'
import { Tenant } from '@/types/Tenant'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Login.module.css'
import Button from '@/components/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Login = (data: Props) => {

  const { tenant, setTenant } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    setTenant(data.tenant)
  }, [])

  const handleSubmit = () => {

  }

  const handleSignup = () => {
    router.push(`/${tenant?.slug}/signup`)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{tenant?.name}</title>
      </Head>
      <Header backHref='/' color={tenant?.mainColor} />

      <div className={styles.header}>
        {tenant?.name}
      </div>
      <div className={styles.subtitle} style={{ borderColor: tenant?.mainColor }}>
        Use suas credenciais para realizar o login.
      </div>
      <div className={styles.line} style={{ color: tenant?.mainColor }}></div>

      <div className={styles.formArea}>

        <div className={styles.inputArea}>
          <InputField
            color={tenant?.mainColor as string}
            placeholder='Digite seu E-mail'
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className={styles.inputArea}>
          <InputField
            color={tenant?.mainColor as string}
            placeholder='Digite seu E-mail'
            value={password}
            onChange={setPassword}
            isPassword={true}
          />
        </div>
        <div className={styles.inputArea}>
          <Button
            color={tenant?.mainColor as string}
            label="Entrar"
            onClick={handleSubmit}
            fill
          />
        </div>

      </div>
      <div className={styles.forgetArea} style={{ borderColor: tenant?.mainColor }}>
        Esqueceu sua senha? <Link href={`/${tenant?.slug}/forget`} className={styles.forgetLink} style={{ color: tenant?.mainColor }}>Clique aqui</Link>
      </div>
      <div className={styles.line}></div>
      <div className={styles.signupArea}>
        <Button
          color={tenant?.mainColor as string}
          label="Quero me cadastrar"
          onClick={handleSignup}
        />
      </div>
    </div>
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
