import React from "react";

const StepperTwo = ({active}) => {
    return (
        <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="52" rx="26" fill={active>1?"#DB1516":"#B8B8B8"}/>
{/* #DB1516 */}
<path d="M26.3391 23.1398H31.1516" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.8484 23.1398L21.5359 23.8273L23.5984 21.7648" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.3391 29.5566H31.1516" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.8484 29.5566L21.5359 30.2441L23.5984 28.1816" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.2503 35.1667H28.7503C33.3336 35.1667 35.167 33.3334 35.167 28.7501V23.2501C35.167 18.6667 33.3336 16.8334 28.7503 16.8334H23.2503C18.667 16.8334 16.8336 18.6667 16.8336 23.2501V28.7501C16.8336 33.3334 18.667 35.1667 23.2503 35.1667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}

export default StepperTwo