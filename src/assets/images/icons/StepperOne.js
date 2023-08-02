import React from "react";

const StepperOne = ({active}) => {
    
    return (
        <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="52" rx="26" fill={active>0?"#DB1516":"#B8B8B8"} />
            <path d="M25.9998 27.3108C27.5793 27.3108 28.8598 26.0303 28.8598 24.4508C28.8598 22.8713 27.5793 21.5908 25.9998 21.5908C24.4202 21.5908 23.1398 22.8713 23.1398 24.4508C23.1398 26.0303 24.4202 27.3108 25.9998 27.3108Z" stroke="white" stroke-width="1.5" />
            <path d="M18.3181 22.7826C20.1239 14.8442 31.8848 14.8534 33.6814 22.7917C34.7356 27.4484 31.8389 31.3901 29.2998 33.8284C27.4573 35.6067 24.5423 35.6067 22.6906 33.8284C20.1606 31.3901 17.2639 27.4392 18.3181 22.7826Z" stroke="white" stroke-width="1.5" />
        </svg>

    )
}

export default StepperOne