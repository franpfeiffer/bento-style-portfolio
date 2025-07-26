import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import '../app/theme/styles/global.css'
import { applyThemePreference } from './shared/utils/theme-utils.ts'
import { useThemeStore } from './shared/stores/useThemeStore.ts'
import 'animate.css'
import { useTranslation } from 'react-i18next'
import { useTranslateStore } from './shared/stores/useTranslateStore.ts'

function App() {
    const lang = useTranslateStore(state => state.lang)
    const theme = useThemeStore(state => state.theme)
    const { i18n } = useTranslation('global')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    useEffect(() => {
        setIsLoading(true)
        applyThemePreference(theme)
        setIsLoading(false)
    }, [theme])

    if (isLoading || !lang) {
        return null
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    )
}

export default App
