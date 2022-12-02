import React from 'react'
import tw, { GlobalStyles } from 'twin.macro'

// components
import Header from "./header.js"
import Footer from "./footer.js"


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div css={[tw`bg-white w-full z-10`]}>
                <main>
                    <GlobalStyles />
                    {children}
                </main>
            </div>
            <div css={[tw`bg-none w-full h-[200px] z-10`]}></div>
            <Footer />
        </>

    )
}


export default Layout