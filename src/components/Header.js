import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';

import '../css/Header.css'

function Header({filterData}) {

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/search`; 
        history.push(path);
    }

    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header_icon"
                    src="https://cdna.artstation.com/p/assets/images/images/018/802/832/large/ana-maria-surdu-untitled-6-1.jpg?1560792444"
                />
            </Link>
            
            <div className='header__center'>
                <input type="text" placeholder="Search by Restaurant" onClick={routeChange} onChange={filterData}/>
                <SearchIcon />
            </div>

            <div className='header__right'>
                <ShoppingCartIcon />
                <NotificationsIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header
