import React from 'react'
import GlobalStyle from '../styles/GlobalStyle.js'
import Layout from 'components/Layout/Layout'
import Aside from 'components/Aside/Aside.js'
import ProductList from 'components/ProductList/ProductList.js'

function ProductListPage() {
  return (
   <>
    <GlobalStyle />
    <Layout>
      <Aside />
      <ProductList />
    </Layout>
   </>
  )
}

export default ProductListPage