import React, { useState, createContext } from 'react';

export const DataContext = createContext({});

export const DataContextProvider = ({ children }: any) => {
  const [data, setData] = useState<any>([]);
  const [mobile, setMobile] = useState<any>('');
  const [id, setId] = useState<any>('');

  return (
    <DataContext.Provider
      value={{
        id,
        setId,
        data,
        setData,
        mobile,
        setMobile,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
