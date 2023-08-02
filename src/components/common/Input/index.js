import React from 'react';
// import './nav.css'

const Input = ({ className, type, onClick, placeholder, name, error, label, required }) => {
    return (
        <div className={className}>
            {label && <label>{label}</label>}
            <input
                type={type}
                onClick={onClick}
                name={name}
                placeholder={placeholder}
                required={required?true:false}
            />
            {error && <div>{error}</div>}
        </div>
    )
}

export default Input
