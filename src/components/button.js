import React from "react"
import tw from 'twin.macro'

const Button = ({ styles, text }) => {

    const buttonStyles = tw`my-4 py-4 px-6 bg-pink rounded-4xl`

    return (
        <div>
            {text ? 
                <button css={[buttonStyles, styles && styles]}>{text}</button>
                : 
                <button css={[buttonStyles, styles && styles]}>sign up</button>
            }
            
        </div>
    )
}

export default Button