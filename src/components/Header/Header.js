import { useState, useEffect } from 'react'
import {
    Drawer,
    HamburgerButton,
    HeaderLinks,
    HeaderStyle,
    HeaderWrapper,
    LogoWrapper,
} from '../styles/HeaderStyle'

const Header = () => {
    const [matches, setMatches] = useState()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(`screen and (max-width:  700px)`)
        setMatches(mediaQuery.matches)

        mediaQuery.addEventListener('change', () => {
            setMatches(mediaQuery.matches)
        })

        return () => {
            mediaQuery.removeEventListener('change', () => {
                setMatches(mediaQuery.matches)
            })
        }
    }, [])
    return (
        <HeaderWrapper>
            <HeaderStyle>
                <LogoWrapper />

                {!matches ? (
                    <HeaderLinks>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#how-it-works">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </HeaderLinks>
                ) : (
                    <>
                        <HamburgerButton
                            onClick={() =>
                                setIsOpen((prev) => (prev ? false : true))
                            }
                        />
                        <Drawer
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                        >
                            <li onClick={() => setIsOpen(false)}>
                                <a href="#home">Home</a>
                            </li>
                            <li onClick={() => setIsOpen(false)}>
                                <a href="#features">Features</a>
                            </li>
                            <li onClick={() => setIsOpen(false)}>
                                <a href="#how-it-works">About</a>
                            </li>
                            <li onClick={() => setIsOpen(false)}>
                                <a href="#contact">Contact</a>
                            </li>
                        </Drawer>
                    </>
                )}
            </HeaderStyle>
        </HeaderWrapper>
    )
}

export default Header
