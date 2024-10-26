import { useState } from 'react';
import { useUser } from '../user/UserContext';
import { useNavigate } from 'react-router-dom';
import './ProfileButton.css';

const ProfileButton = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/home');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="profile-button">
            {user ? (
                <div className="user-menu">
                    <button className="dropdown-button" onClick={toggleMenu}>
                        {user.username} ▼
                    </button>
                    {isMenuOpen && (
                        <div className="dropdown-content">
                            <button onClick={handleLogout} className="logout-button">Logout</button>
                        </div>
                    )}
                </div>
            ) : (
                <button className="login-button" onClick={() => navigate('/signin')}>Sign In</button>
            )}
        </div>
    );
};

export default ProfileButton;
