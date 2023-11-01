import React, { FC, PropsWithChildren, useEffect } from 'react';
import useCheckJWT from '../Helper/JWTHepler';

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
    const { checkJWT } = useCheckJWT();


    useEffect(() => {
        checkJWT();
    }, [children]); 

    return <>{children}</>;
};