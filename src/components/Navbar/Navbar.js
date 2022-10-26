import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import Logo from './../../images/logo.png'

const Navbar = () => {
    return (
        <div className='my_navbar'>            

            <div className='item_1 display_flex'>
                <NavLink to='/' className={ ({isActive}) => isActive ? undefined : undefined }> <img src={Logo} alt="" /> </NavLink>
                <NavLink id='site_name' className={ ({isActive}) => isActive ? undefined : undefined } to='/'>Edu Station</NavLink>
            </div>  

            <div className='item_2 display_flex extra_sm'>                
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/courses'>Courses</NavLink>              
                    <NavLink to='/quiz'>Quiz</NavLink>              
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/faq'>FAQ</NavLink>              
            </div>
            
            <div className='item_3 display_flex extra_sm'>
                <span>Nakib Uddin Ahmad</span>
                <NavLink className={ ({isActive}) => isActive ? undefined : undefined } to='na'><img src={"https://media-exp2.licdn.com/dms/image/C4E03AQFdlPe5MVvRqg/profile-displayphoto-shrink_200_200/0/1568338214983?e=2147483647&v=beta&t=z8GXqtxkYD5QZZGpBKX4nyJp44mICeVkf76h6s5QlSQ"} alt="" /></NavLink>
                <NavLink className='active' to='/login'>Log in</NavLink>                
                <NavLink className='active' to='/register'>Register</NavLink>                
            </div>

        </div>
    );
};

export default Navbar;