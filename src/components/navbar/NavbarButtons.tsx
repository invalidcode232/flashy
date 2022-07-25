import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import ShadowButton from '../UI/ShadowButton';

const NavbarButtons = () => {
    return (
        <div>
            <ShadowButton>
                <FaUser />
            </ShadowButton>
            <ShadowButton>
                <FaBell />
            </ShadowButton>
        </div>
    );
};

export default NavbarButtons;
