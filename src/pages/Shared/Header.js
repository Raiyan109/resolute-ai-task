import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const Header = () => {
    const { logout, user } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }
    return (
        <div class="navbar bg-stone-800">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to='/login' class="btn bg-yellow-500 text-black">Login</Link></li>
                        {/* <li tabindex="0">
                            <a class="justify-between">
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl text-white">Task Manager</Link>
                <h1 className='text-white'>Hello, {user.displayName}</h1>
            </div>
            <div class="navbar-center  hidden lg:flex">
                <ul class="menu menu-horizontal bg-orange-200 p-0">
                    {user.displayName && <li> <Link to='/addTask' class="btn bg-yellow-500 text-black">Add Task</Link></li>}
                    {/* <li tabindex="0">
                        <a>
                            Parent
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li> */}
                </ul>
            </div>
            <div class="navbar-end">
                {user ? <button onClick={handleLogout} className='btn bg-yellow-500 text-black'>Logout</button>
                    :
                    <>
                        <Link to='/signup' class="btn bg-yellow-500 text-black">Sign up</Link>
                        <Link to='/login' class="btn bg-yellow-500 text-black">Login</Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Header;