import React, { FC } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { appPath, userRoles } from '../../utilites/constants/appPaths';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css'

const Layout: FC = () => {
    const userRole = useTypedSelector(state => state.user.role)
    if (!userRole) {
        return <>
            <Navbar>Выберите роль</Navbar>
            <Outlet></Outlet>
            <footer></footer>
        </>
    }


    const emploerNavbarLinks = [
        appPath.resume, appPath.reply, appPath.vacancy,
    ]

    const workmanNavbarLinks = [
        appPath.vacancy, appPath.reply, appPath.userResume
    ]

    return (
        <>{userRole === userRoles.employer ?
            <Navbar>
                {emploerNavbarLinks.map((link, index) => <NavLink key={index} className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                } to={link.path}>{link.linkName}</NavLink>)}
            </Navbar> :
            <Navbar>
                {workmanNavbarLinks.map((link, index) => <NavLink key={index} className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                } to={link.path}>{link.linkName}</NavLink>)}
            </Navbar>}
            <Outlet></Outlet>
            <footer></footer>
        </>
    );
};

export default Layout;