import React, { useContext } from 'react';

export const Context = React.createContext({});

export const useHeaderContext = () => useContext(Context);
