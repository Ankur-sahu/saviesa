import React from 'react';
import { TextField, Button } from "@mui/material";
import './screenOne.css';

const SceenOne = ({ storeData, nextStep }) => {
    const inputStyle = {
        width: '100%',
        height: '40px',
    }

    return (
        <>
            <h2 style={{ marginBottom: '20px' }}>
                Personal Details
            </h2>
            <form className='form-fields' onSubmit={nextStep}>
                <TextField id="outlined-basic" sx={inputStyle} name='fname' placeholder="Enter Full Name" required variant="outlined" onChange={storeData} />
                <TextField id="outlined-basic" sx={inputStyle} type='email' name='email' placeholder="Email" required variant="outlined" onChange={(e) => storeData(e)} />
                <div className='input-group'>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} type='number' name='number' placeholder="Mobile Number" required variant="outlined" onChange={(e) => storeData(e)} />
                    </div>
                    <div>

                        <TextField placeholder='DOB' id="outlined-basic" name='dob' sx={inputStyle} required variant="outlined" onChange={(e) => storeData(e)} />
                    </div>
                </div>
                <div className='input-group'>
                    <div>
                        <TextField placeholder='Joining Date' id="outlined-basic" name='doj' sx={inputStyle} required variant="outlined" onChange={(e) => storeData(e)} />
                    </div>
                    <div>

                        <TextField id="outlined-basic" sx={inputStyle} name='qualification' placeholder="Qualification" required variant="outlined" onChange={(e) => storeData(e)} />
                    </div>
                </div>
                <div className='input-group'>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} name='curemp' placeholder="Current Employer" required variant="outlined" onChange={(e) => storeData(e)} />
                    </div>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} name='designation' placeholder="Designation" required variant="outlined" onChange={(e) => storeData(e)} />
                    </div>
                </div>
                <div className='upload-btn'>
                    <Button type='sybmit' variant="contained" sx={{ width: "30%", fontSize: "16px", margin: "20px 0px" }} color="error">
                        next
                    </Button>
                </div>
            </form>
        </>
    )
}

export default SceenOne
