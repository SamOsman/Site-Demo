import React from 'react'
import tw, { GlobalStyles } from 'twin.macro'

import { layoutPadding } from "styles/baseStyles"


// components
import Header from "./header.js"
import Footer from "./footer.js"


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div css={[tw`bg-white w-full h-[800px] z-10`]}>
                <main css={[layoutPadding]}>
                    <GlobalStyles />
                    {children}
                </main>
            </div>
            <div css={[tw`bg-none w-full h-[200px] z-10`]}></div>
            <Footer/>
        </>

    )
}


export default Layout