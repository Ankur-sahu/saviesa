import React from 'react';
import { TextField, InputAdornment, Icon } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './header.css'
import logo from '../../../assets/images/CANESTELOGO.png'
import notificationIcon from '../../../assets/images/notificationIcon.png'
import dp from '../../../assets/images/Ellipse.png'
import userIcon from '../../../assets/images/hIcon1.png'
import refreshIcon from '../../../assets/images/hIcon2.png'
import downArrow from '../../../assets/images/downArrowIcon.png'

const Header = () => {
    const iconSize = {
        width: "30px"
    }
    return (
        <header>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='header-right'>
                <div className='rigth-top'>
                    <img style={iconSize} src={notificationIcon} /> <div className='rigth-top-user'> <img style={iconSize} src={dp} /> <span>Hari</span> <img src={downArrow} /> </div>
                </div>
                <div className='header-title'>
                    <h2>Add Tenants</h2>
                    <TextField
                        className="group-inner"
                        sx={{ width: "30%" }}
                        color="primary"
                        variant="outlined"
                        type="text"
                        id="outlined-basic"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon  />
                                </InputAdornment>
                            ),
                        }}
                        placeholder="search"
                        size="medium"
                        margin="none"
                    />
                    <div className='header-bottum-icons'>
                        <img src={userIcon} />
                        <img src={refreshIcon} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
