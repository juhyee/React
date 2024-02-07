import React from 'react'
import GlobalStyle from '../styles/GlobalStyle.js'
import Layout from 'components/Layout/Layout'
import Aside from 'components/Aside/Aside.js'

function ProductListPage() {
  return (
   <>
    <GlobalStyle />
    <Layout>
      <Aside />
    </Layout>
   </>
  )
}

export default ProductListPage