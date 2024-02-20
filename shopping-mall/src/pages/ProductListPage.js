import React from 'react'
import GlobalStyle from '../styles/GlobalStyle.js'
import Layout from 'components/Layout/Layout'
import ProductList from 'components/ProductList/ProductList.js'
import SliderBanner from 'components/SliderBanner/SliderBanner'

function ProductListPage() {
  return (
   <>
    <GlobalStyle />
    <Layout>
      <SliderBanner />
      <ProductList />
    </Layout>
   </>
  )
}

export default ProductListPage