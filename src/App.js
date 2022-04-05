import './App.css'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Layout from './components/Layout/Layout'
import { theme } from './theme/theme'
import Features from './components/Features/Features'
import HowItWorks from './components/HowItWorks/HowItWorks'
import WhoWeAre from './components/WhoWeAre/WhoWeAre'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Header />
                <Hero />
                <Features />
                <HowItWorks />
                <WhoWeAre />
            </Layout>
        </ThemeProvider>
    )
}

export default App
