import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
      <Head>
          <title>{title}</title>
          <meta name='description' content={description}/>
          <meta name='keywords' content={keywords}/>
      </Head>
    
        <Header />
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