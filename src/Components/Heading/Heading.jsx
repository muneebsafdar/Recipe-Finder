import React from 'react'

function Heading({
    children,
    className=''
}) {
    return (
        <h1 className= {`'text-black font-bold  w-full ${className}`}>{children}</h1>
    )
}

export default Heading
