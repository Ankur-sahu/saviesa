import React from 'react';
import './nav.css'
import icon1 from '../../../assets/images/icon1.png'
import icon2 from '../../../assets/images/icon2.png'
import icon3 from '../../../assets/images/icon3.png'
import icon4 from '../../../assets/images/icon4.png'
import icon5 from '../../../assets/images/icon5.png'
import icon6 from '../../../assets/images/icon6.png'
import icon7 from '../../../assets/images/icon7.png'
import icon8 from '../../../assets/images/icon8.png'
import icon9 from '../../../assets/images/icon9.png'
import icon10 from '../../../assets/images/icon10.png'
import icon11 from '../../../assets/images/icon11.png'


const Nav = ()=>{
    return(
        <nav>
            <div className='nav-items'>
                <img src={icon1} />
                <img src={icon2} />
                <img src={icon3} />
                <img src={icon4} />
                <img src={icon5} />
                <img src={icon6} />
                <img src={icon7} />
                <img src={icon8} />
                <img src={icon9} />
                <img src={icon10} />
                <img src={icon11} />
            </div>
        </nav>
    )
}

export default Nav
