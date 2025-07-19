import React from 'react'

function Button({
    children,
    type = 'submit',
    className = 'bg-blue-500 text-white px-4 py-2 rounded'}
) {
    return (
        <button
        type={type}
        className={`transition-all duration-300 ease-in-out hover:bg-blue-600 ${className}`}
        >
        {children}
        </button>
    )
}

export default Button
