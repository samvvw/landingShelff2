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
                        <li>Home</li>
                        <li>Features</li>
                        <li>About</li>
                        <li>Contact</li>
                    </HeaderLinks>
                ) : (
                    <>
                        <HamburgerButton
                            onClick={() =>
                                setIsOpen((prev) => (prev ? false : true))
                            }
                        />
                        {isOpen && (
                            <Drawer onClose={() => setIsOpen(false)}>
                                <li>Home</li>
                                <li>Features</li>
                                <li>About</li>
                                <li>Contact</li>
                            </Drawer>
                        )}
                    </>
                )}
            </HeaderStyle>
        </HeaderWrapper>
    )
}

export default Header
