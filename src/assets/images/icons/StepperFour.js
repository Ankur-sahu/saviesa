import React from "react";

const StepperFour = ({active}) => {
    return (
        <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="52" rx="26" fill={active>3?"#DB1516":"#B8B8B8"}/>
<path d="M34.25 21.4167V30.5834C34.25 33.3334 32.875 35.1667 29.6667 35.1667H22.3333C19.125 35.1667 17.75 33.3334 17.75 30.5834V21.4167C17.75 18.6667 19.125 16.8334 22.3333 16.8334H29.6667C32.875 16.8334 34.25 18.6667 34.25 21.4167Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.2913 19.125V20.9583C28.2913 21.9667 29.1163 22.7917 30.1246 22.7917H31.9579" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.3337 26.9166H26.0004" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.3337 30.5834H29.6671" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


    )
}

export default StepperFour