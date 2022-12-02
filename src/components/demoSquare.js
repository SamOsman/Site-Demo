import React from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby'


const DemoSquare = ({ title, subTitle, url, img, additionalStyles }) => {
    console.log('Image Url:', img)
    return (
        <Link to={url}>
            <div css={[tw`rounded-4xl bg-black-olive-light drop-shadow-xl max-w-[500px] min-h-[440px]`]}>

                <img src={img} css={[tw`rounded-tl-4xl rounded-tr-4xl`]} />
                <p css={[tw`py-4 pl-2 text-xl font-semibold`]}>{title}</p>
                <p css={[tw`pl-2`]}>{subTitle}</p>

            </div>
        </Link>
    )
}


export default DemoSquare