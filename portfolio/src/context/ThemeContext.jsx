import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

export const themes = {
  indigo: { primary: '#6366f1', gradient: 'from-indigo-600 to-purple-600', label: 'Indigo' },
  cyan:   { primary: '#06b6d4', gradient: 'from-cyan-500 to-blue-600',     label: 'Cyan'   },
  rose:   { primary: '#f43f5e', gradient: 'from-rose-500 to-pink-600',     label: 'Rose'   },
  emerald:{ primary: '#10b981', gradient: 'from-emerald-500 to-teal-600',  label: 'Emerald'},
  amber:  { primary: '#f59e0b', gradient: 'from-amber-500 to-orange-600',  label: 'Amber'  },
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark]       = useState(true)
  const [themeKey, setThemeKey]   = useState('indigo')

  useEffect(() => {
    const saved = localStorage.getItem('theme-mode')
    const savedColor = localStorage.getItem('theme-color')
    if (saved)      setIsDark(saved === 'dark')
    if (savedColor) setThemeKey(savedColor)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme-mode', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    localStorage.setItem('theme-color', themeKey)
    const root = document.documentElement
    root.style.setProperty('--color-primary', themes[themeKey].primary)
  }, [themeKey])

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, themeKey, setThemeKey, theme: themes[themeKey] }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
