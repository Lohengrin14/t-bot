import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
interface RequireAuthsProps {
    children: React.ReactElement<any, any>
}
const RequireRole = ({ children }: RequireAuthsProps) => {
    const location = useLocation()
    const userRole = useTypedSelector(state => state.user.role)

    return <>
        {!!userRole ? children : <Navigate to='/' state={{ from: location }} />}
    </>
};

export default RequireRole;