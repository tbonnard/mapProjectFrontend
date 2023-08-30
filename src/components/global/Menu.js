import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom';

import SubMenu from './SubMenu';

import menuIcon from '../../media/menu.png'

const Menu = () => {


    const [menuDisplayed, setMenuDisplayed] = useState(false)

    const handleClick = () => {
        setMenuDisplayed(true)
    }


    return (
    <div className='MenuGlobal'>
        {!menuDisplayed && 
            <div className='MenuGlobalMenu'>
                <img className='menuIcon' 
                                src={menuIcon}  
                                onClick={handleClick}
                                alt='cancel - close'
                                width={"30px"}
                            />
            </div>
         }
       
        {menuDisplayed && 
            <SubMenu setMenuDisplayed={setMenuDisplayed} /> 
        }
    </div>
    )
}

export default Menu