// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaTasks, FaHome, FaSignOutAlt, FaChevronDown, FaEdit, FaTrash } from 'react-icons/fa';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sidebar">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '80px', marginTop: '20px', gap: '10px' }}>
                <img 
                    src="https://afn.ca/wp-content/uploads/2022/12/unknown_staff-500x500.webp" 
                    alt="user profile" 
                    style={{ borderRadius: '10%', width: '60px', height: '60px', border: '2px solid black' }}
                />
                <div>
                    <h6>Name</h6>
                    <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>User Type</p>
                </div>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ margin: '10px 0' }}>
                    <Link 
                        to="/profile" 
                        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', padding: '10px', borderRadius: '5px', transition: 'background 0.3s', border: '1px solid #e0e0e0' }} 
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'} 
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <FaHome style={{ marginRight: '8px' }} />
                        Home
                    </Link>
                </li>
                <li style={{ margin: '10px 0' }}>
                    <Link 
                        to="/TaskSt" 
                        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', padding: '10px', borderRadius: '5px', transition: 'background 0.3s', border: '1px solid #e0e0e0' }} 
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'} 
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <FaTasks style={{ marginRight: '8px' }} />
                        Tasks
                    </Link>
                </li>
                {/* <li style={{ margin: '10px 0' }}>
                    <Link 
                        to="/profile" 
                        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', padding: '10px', borderRadius: '5px', transition: 'background 0.3s', border: '1px solid #e0e0e0' }} 
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'} 
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <FaUser style={{ marginRight: '8px' }} />
                        Profile
                    </Link>
                </li> */}
                <li style={{ margin: '10px 0' }}>
                    <div 
                        onClick={toggleMenu} 
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '10px', borderRadius: '5px', transition: 'background 0.3s', border: '1px solid #e0e0e0' }} 
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'} 
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <FaCog style={{ marginRight: '8px' }} />
                        Settings
                        <FaChevronDown style={{ marginLeft: 'auto' }} />
                    </div>
                    {isOpen && (
                        <ul style={{ listStyleType: 'none', padding: 0, margin: '10px 0 0 0' }}>
                            <li style={{ margin: '5px 0' }}>
                                <Link 
                                    to="/edit-profile" 
                                    style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', padding: '8px 10px', borderRadius: '5px', background: '#f9f9f9' }}
                                >
                                    <FaEdit style={{ marginRight: '8px' }} />
                                    Edit Profile
                                </Link>
                            </li>
                           
                        </ul>
                    )}
                </li>
                <li style={{ margin: '10px 0' }}>
                    <Link 
                        to="/" 
                        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', padding: '10px', borderRadius: '5px', transition: 'background 0.3s', border: '1px solid #e0e0e0' }} 
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'} 
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <FaSignOutAlt style={{ marginRight: '8px' }} />
                        Log Out
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;