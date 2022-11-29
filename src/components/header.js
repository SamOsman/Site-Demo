import React from "react"
import tw from "twin.macro"
import {layoutPadding, h1} from "styles/baseStyles"
import  {Link} from "gatsby"

const header = () => {
    const linkStyles = tw`mr-4 xl:(mr-0  ml-20)`
    console.log("baseStyles:", h1)

    return (
        <header css={[layoutPadding, tw`xl:(grid grid-flow-row grid-cols-6)`]}>
            <h1 css={
                [h1, tw`xl:(col-start-1 col-span-3)`]
                }>Sam Osman</h1>
            <div css={
                [tw`xl:(col-start-4 col-span-3 w-full flex justify-end)`]
                }>
                <Link to="" css={[linkStyles]}>
                    Work
                </Link>
                <Link to="" css={[linkStyles]}>
                    Contact
                </Link>
                <Link to="" css={[linkStyles]}>
                    Resume
                </Link>
            </div>
        </header>
        
    )
}

export default header