import React, { useEffect, useState } from 'react'

const defaultContextData = {
  dark: false,
  toggle: () => {},
}

const ThemeContext = React.createContext(defaultContextData)
export const useTheme = () => React.useContext(ThemeContext)

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeLoaded: false,
  })
  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true'
    setThemeState({ ...themeState, dark: isDark, hasThemeLoaded: true })
  }, [])
  return [themeState, setThemeState]
}

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode()

  if (!themeState.hasThemeLoaded) return <div />

  const toggle = () => {}

  return (
    <ThemeContext.Provider value={{ dark: themeState.dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
