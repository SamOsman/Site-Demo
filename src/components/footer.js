import React from "react"
import tw from 'twin.macro'

import {layoutPadding, h2} from "./../styles/baseStyles"


const footer = () => {

    const footerPostion = tw`fixed bottom-0 w-full h-[200px] z-[-1]`

    return (
        <footer css={[layoutPadding, footerPostion, tw`bg-black-olive text-white `]}>
            <h2 css={[h2]}>Sam Osman</h2>
        </footer>
    )
}
export default footer