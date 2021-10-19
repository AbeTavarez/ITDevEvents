import Head from 'next/head'
import styles from '@/styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import { useRouter } from 'next/router'

export default function Layout({title, keywords, description, children}) {

    const router = useRouter();

  return (
    <div>
      <Head>
          <title>{title}</title>
          <meta name='description' content={description}/>
          <meta name='keywords' content={keywords}/>
      </Head>
    
        <Header />

        {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>
      {children}
      </div>
      <Footer />
    </div>
  )
}


Layout.defaultProps = {
    title: 'IT Dev Events',
    description: 'All tech events in one place',
    keywords: 'IT, information technology, dev, developer, development, programming coding, code, coder, devops, sysadmin, linux, data analysis, data administrator, database, product manager, app developer, ux ui'
}