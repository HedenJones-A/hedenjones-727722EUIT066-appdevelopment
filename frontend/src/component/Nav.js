import React from 'react';
import './css/Nav.css';
import logo from './images/logo.jpg';
import elite from './images/file.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem("isLoggedIn");
        navigate("/security/authenticate");
    };

    const handleMyBookings = () => {
        navigate("/management/mybookings");
    };

    return (
        <div>
            <div className='home_container'>
                <nav className='home_nav'>
                    <img className='home_logo' src={logo} alt='Logo'></img>
                </nav>
                <img className='comp_name' src={elite} alt='Elite'></img>
                <div className='log_noti'>
                    <div className='cart'>
                        <ShoppingCartIcon />
                    </div>
                    <div className='noti'>
                        <NotificationsActiveIcon />
                    </div>
                    <div className='profile' onClick={() => navigate('/management/profile')}>
                        <AccountCircleIcon />
                    </div>
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={handleMyBookings}
                    >
                        My Bookings
                    </button>
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nav;
