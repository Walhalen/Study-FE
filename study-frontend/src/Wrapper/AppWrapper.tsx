import React, { FC, PropsWithChildren, useEffect } from 'react';
import useCheckJWT from '../Helper/JWTHepler';
import { useNavigate } from 'react-router-dom';
import useJWTStore from '../Storages/JWTStorage';

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
    const { checkJWT } = useCheckJWT();
    const navigate = useNavigate();
    const isAuthenticated = useJWTStore((state) => state.isAuthenticated)




    useEffect(() => {
        checkJWT();
    }, [navigate]); 

    return <>{children}</>;
};