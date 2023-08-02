import React, { useRef, useState } from 'react';
import Header from '../components/layouts/Header';
import Nav from '../components/layouts/Nav';
import './tenant.css'
import Button from '@mui/material/Button';
import uploadIcon from '../assets/images/uploadIcon.png';
import demoImg from '../assets/images/demo.PNG'
import ScreenOne from '../components/ScreenOne';
import ScreenTwo from '../components/ScreenTwo';
import ScreenThree from '../components/ScreenThree';
import StepperLine from '../assets/images/icons/StepperLine';
import StepperOne from '../assets/images/icons/StepperOne';
import StepperTwo from '../assets/images/icons/StepperTwo';
import StepperThree from '../assets/images/icons/StepperThree';
import StepperFour from '../assets/images/icons/StepperFour';

const Tenant = () => {
    const [formData, setFromData] = useState({})
    const [stepperSteps, setStepperSteps] = useState(0)
    const storeData =(e)=>{
        setFromData({...formData,[e.target.name]:e.target.value})
        console.log(formData)
    }
    function nextStep (e){
        console.log("running ",e)
        e.preventDefault();

        if(stepperSteps<5){

            setStepperSteps(()=>stepperSteps+1)
        }
    }
    
    const fileInputRef = useRef(null);
    const certificateRef = useRef(null);
    const handleDivClick = (name) => {
        if (name === "identity") {

            fileInputRef.current.click();
        } else {
            certificateRef.current.click();
        }

    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const inputName = e.target.name; 
        setFromData({...formData,[e.target.name]:file})
    };

    const styleUpload = {
        width: '100%',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '1px solid #979797',
        borderRadius: '5px',
        gap:'5px'
    }
    return (
        <div className="App">
            <Header />
            <main>
                <Nav />
                <section className='container-wrap'>
                    <div className='stepper-and-from'>
                        <div className='stepper'>
                            <StepperOne active={stepperSteps}/>
                            <StepperLine step={1} active={stepperSteps} />
                            <StepperTwo active={stepperSteps} />
                            <StepperLine step={2} active={stepperSteps} />
                            <StepperThree active={stepperSteps} />
                            <StepperLine step={3} active={stepperSteps} />
                            <StepperFour active={stepperSteps} />
                        </div>
                        <div className='form-container'>
                            {stepperSteps ===0?<ScreenOne storeData={storeData} nextStep={nextStep} />:
                            stepperSteps===1?<ScreenTwo storeData={storeData} nextStep={nextStep} />:
                            <ScreenThree storeData={storeData} nextStep={nextStep} />}
                            
                        </div>
                    </div>
                    <div className='upload-docs-container'>
                        <div >
                            <h2>Upload Photo</h2>
                            <div className='user-pic'>
                                <img src={demoImg} alt='Avtar' />
                            </div>
                        </div>
                        <div className='controls'>
                            <h2>
                                Upload Document
                            </h2>
                            <div className='upload-container-btn'>
                                <input
                                    type="file"
                                    name='identity'
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                                <div
                                    onClick={() => handleDivClick("identity")}
                                    style={styleUpload}
                                >
                                    <img src={uploadIcon} />  Indetity Proof
                                </div>
                            </div>
                            <div className='upload-container-btn'>
                                <input
                                    type="file"
                                    name="certificate"
                                    ref={certificateRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                                <div
                                    onClick={() => handleDivClick('certificate')} 
                                    style={styleUpload}
                                >
                                    <img src={uploadIcon} /> Citizenship Certificate
                                </div>
                            </div>
                        </div>
                        <div className='upload-btn'>
                            <Button variant="contained" sx={{ width: "50%", fontSize: "16px" }} color="error">
                                Success
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Tenant
