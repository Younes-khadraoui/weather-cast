"use client";
import React, { createContext, useContext, useState } from "react";

interface ContextValue {
  search: string | null;
  setSearch: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchContext = createContext<ContextValue>({
  search: null,
  setSearch: () => {},
});

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [search, setSearch] = useState<string | null>(null);
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
