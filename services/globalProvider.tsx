import { GlobalContextType } from '@/utils/interfaces';
import React, { createContext, ReactNode, useContext } from 'react';
import { handleFetchUser } from './appwrite';
import useFetch from './useFetch';

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const { data, loading, reFetch } = useFetch(handleFetchUser);
    const isLoggedIn = data?.userData ? true : false;

    return (
        <GlobalContext.Provider value={{ isLoggedIn, userData: data?.userData!, loading, reFetch }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

export default GlobalProvider;