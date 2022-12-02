import React from "react"
import tw from "twin.macro"

import { layoutPadding, h1 } from "styles/baseStyles"
import Button from '@components/button'
import { Link } from "gatsby"

const Header = () => {
    const linkStyles = tw`mr-10 text-xl md:(text-lg mr-6)`

    return (
        <header css={[layoutPadding, tw`md:(grid grid-flow-row grid-cols-6)`]}>

            <h1 css={[h1, tw`mb-6 md:(mb-0 col-start-1 col-span-3)`]}>Sam Osman </h1>

            <div css={[tw`md:(col-start-4 col-span-3 w-full flex items-center justify-end)`]}>
                <Link to="#work" css={[linkStyles ,tw`pr-10 border-r-2 md:(pr-4 mr-4)`]}>
                    Work
                </Link>
                <Link to="#resume"  css={[linkStyles]}>
                    resume
                </Link>
                <Link to='#contact'  css={[linkStyles]}>
                    <Button
                        text="Contact"
                        styles={tw`mt-6 px-12 bg-black-olive text-white my-0 md:(px-8 mt-0 py-2)`}
                    />
                </Link>
            </div>
        </header>

    )
}

export default Header