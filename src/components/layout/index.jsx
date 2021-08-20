import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <header>this is a header</header>
      <main>{children}</main>
      <footer>this is a footer</footer>
    </>
  )
}

export default Layout
