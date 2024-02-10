import { createContext, useContext, useState } from "react";

export const SearchContext = createContext({})

function SearchProvider({ children }) {
  const [ search, setSearch ] = useState('')

  function changeSearch({value}) {
    setSearch(value)
  }

  return (
    <SearchContext.Provider
      value={{
        search,
        changeSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

function useSearch() {
  const context = useContext(SearchContext)
  return context
}

export { SearchProvider, useSearch }
