import React from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SceenTwo = ({ storeData, nextStep }) => {
    const inputStyle = {
        width: '100%',
        height: '40px',
    }

    return (
        <>
            <h2 style={{ marginBottom: '20px' }}>
                Assign Property
            </h2>
            <form className='form-fields' onSubmit={nextStep}>
                <FormControl sx={{ marginBottom: "10px" }} fullWidth>
                    <InputLabel id="demo-simple-select-label">Property Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="property-select"
                        placeholder='Property Name'
                        onChange={storeData}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <div className='input-group'>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} placeholder="No" name='hno' type='number' onChange={storeData} required variant="outlined" />
                    </div>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} placeholder="Street Name" name='hno' onChange={storeData} required variant="outlined" />
                    </div>
                </div>
                <div className='input-group'>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} placeholder="City" name='city' onChange={storeData} required variant="outlined" />
                    </div>
                    <div>

                        <TextField id="outlined-basic" sx={inputStyle} placeholder="Province" name='province' onChange={storeData} required variant="outlined" />
                    </div>
                </div>
                <div className='input-group'>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} placeholder="Country" name='country' onChange={storeData} required variant="outlined" />
                    </div>
                    <div>
                        <TextField id="outlined-basic" sx={inputStyle} placeholder="Postel Code" type='number' name='pcode' onChange={storeData} required variant="outlined" />
                    </div>
                </div>
                <div className='upload-btn'>
                    <Button type='submit' variant="contained" sx={{ width: "30%", fontSize: "16px", margin: "20px 0px" }} color="error">
                        Next
                    </Button>
                </div>
            </form>
        </>
    )
}

export default SceenTwo
