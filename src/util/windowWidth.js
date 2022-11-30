import React, { useEffect, useState } from "react"


export const WindowWidth = () => {
    
    const [width, setWidth] = useState(window.innerWidth)

    return (

        useEffect(() => {
            function handleResize() {
                setWidth(window.innerWidth)
            }
            window.addEventListener('resize', handleResize)
        })
    )
}
