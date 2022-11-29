import tw from "twin.macro"


export const layoutPadding = () => {
    return (
        tw` p-4 md:(px-[100px] py-10) xl:(px-[200px] py-10)`
    )
} 

export const h1 = () => {
    return (
        tw` text-5xl md:(text-4xl) xl:(text-4xl)`
    )
} 
