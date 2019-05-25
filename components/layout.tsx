import React from 'react'

import Header from './molecules/Header'
import Footer from './molecules/Footer'

const Layout: any = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
