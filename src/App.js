import './App.css'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Layout from './components/Layout/Layout'
import { theme } from './theme/theme'
import Features from './components/Features/Features'
import HowItWorks from './components/HowItWorks/HowItWorks'
import WhoWeAre from './components/WhoWeAre/WhoWeAre'
import Contact from './components/Contact/Contact'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Header />
                <Hero id="home" />
                <Features id="features" />
                <HowItWorks id="how-it-works" />
                <WhoWeAre id="who-we-are" />
                <Contact />
            </Layout>
        </ThemeProvider>
    )
}

export default App
