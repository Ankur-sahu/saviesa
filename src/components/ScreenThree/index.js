import React from 'react';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";

const SceenThree = ({ storeData, nextStep }) => {
    const inputStyle = {
        width: '100%',
        height: '40px',
    }
    return (
        <>
            <h2 style={{ marginBottom: '20px' }}>
                Bank Details
            </h2>
            <form className='form-fields' onSubmit={nextStep}>

                <div className='input-group'>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} placeholder="Account Holder Name" name='ahname' onChange={storeData} required variant="outlined" />
                    </div>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} placeholder="Account Type" name='atype' onChange={storeData} required variant="outlined" />
                    </div>
                </div>
                <div className='input-group'>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} placeholder="Bank Name" name='bname' onChange={storeData} required variant="outlined" />
                    </div>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} placeholder="Bank Number" type='number' name='bankno' onChange={storeData} required variant="outlined" />
                    </div>
                </div>
                <div className='input-group'>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} placeholder="Transit Number" type='number' name='trasitno' onChange={storeData} required variant="outlined" />
                    </div>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} placeholder="Account Number" type='number' name='acno' onChange={storeData} required variant="outlined" />
                    </div>
                </div>
                <div className='upload-btn'>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name='ptype' onChange={storeData}
                    >
                        <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                        <FormControlLabel value="card" control={<Radio />} label="Card" />
                        <FormControlLabel value="online" control={<Radio />} label="Online" />

                    </RadioGroup>
                </div>
                <div className='upload-btn'>
                    <Button type='submit' variant="contained" sx={{ width: "30%", fontSize: "16px", margin: "20px 0px" }} color="error">
                        Success
                    </Button>
                </div>
            </form>
        </>
    )
}

export default SceenThree
