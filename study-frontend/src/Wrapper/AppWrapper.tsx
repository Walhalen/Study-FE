import React, { FC, PropsWithChildren, useEffect } from 'react';
import useCheckJWT from '../Helper/JWTHepler';
import { useNavigate } from 'react-router-dom';

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
    const { checkJWT } = useCheckJWT();
    const navigate = useNavigate();

    useEffect(() => {
        checkJWT();
    }, [navigate]); 

    return <>{children}</>;
};