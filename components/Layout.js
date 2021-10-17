import Head from 'next/head'

import React from 'react'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
      <Head>
          <title>{title}</title>
          <meta name='description' content={description}/>
          <meta name='keywords' content={keywords}/>
      </Head>

      {children}
    </div>
  )
}


Layout.defaultProps = {
    title: 'IT Dev Events',
    description: 'All tech events in one place',
    keywords: 'IT, information technology, dev, developer, development, programming coding, code, coder, devops, sysadmin, linux, data analysis, data administrator, database, product manager, app developer, ux ui'
}