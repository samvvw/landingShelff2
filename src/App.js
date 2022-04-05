import './App.css'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Layout from './components/Layout/Layout'
import { theme } from './theme/theme'
import Features from './components/Features/Features'
import HowItWorks from './components/Features/HowItWorks'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Header />
                <Hero />
                <Features />
                <HowItWorks />
            </Layout>
        </ThemeProvider>
    )
}

export default App
