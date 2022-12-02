import React from 'react'
import tw from 'twin.macro'

const ContactIcon = ({link, img, addStyles}) => {
    return (
        <a href={link} target="_blank" 
            css={[tw`bg-white rounded-4xl p-6 shadow-xl`]}>
            <img src={img} css={[tw`w-[35px] h-[35px]`]}/>
        </a>
    )
}

export default ContactIcon