import React from 'react'

function Input({
    type = 'text',
    placeholder = '',
    value = '',
    className = '',
    label = null,
    ...props
}) {
    return (
        
        <div className={`relative ${className}`}>
        {label && <label className='block mb-2 text-sm font-medium text-gray-700'>{label}</label>}    
        {!label && <i className="ri-search-line text-xl text-gray-600 absolute left-0 top-[15%] px-2"></i>}
        <input 
            type={type}
            placeholder={placeholder}
            className={` w-full outline-0 border-[1px] border-gray-400 rounded  pl-10 py-2 ${className}` }
            {...props}
        />
        </div>

       
    )
}

export default Input
