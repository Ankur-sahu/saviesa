import React from "react";

const StepperLine = ({ step, active }) => {
    console.log(active, "active ", step)
    return (
        <svg width="60" height="2" viewBox="0 0 154 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1L154 1.00004" stroke={active >= step ? "#DB1516" : "#B8B8B8"} stroke-width="2" />
        </svg>

    )
}

export default StepperLine