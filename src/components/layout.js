import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { layoutPadding } from "styles/baseStyles"


// components
import Header from "./header.js"
import Footer from "./footer.js"


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main css={[layoutPadding]}>
                <GlobalStyles />
                {children}
            </main>
            <Footer />
        </>

    )
}


export default Layout