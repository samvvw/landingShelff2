import { useState, useEffect } from 'react'
import { ContactStyle } from '../styles/ContactStyle'
import footerImageDesktop from '../../images/brownFooter.png'
import footerImageMobile from '../../images/brownFooterMobile.png'
import blobFooterDesktop from '../../images/blobFooter.png'
import blobFooterMobile from '../../images/blobFooterMobile.png'
import googleIcon from '../../images/google_play.png'
import appleIcon from '../../images/apple.png'

const Contact = () => {
    const [matches, setMatches] = useState()

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
        <ContactStyle
            title={
                <>
                    The <span>effortless</span> way to track your food
                    shelf-life
                </>
            }
            note="© 2022 Shelff. All Rights Reserved."
            bg1={!matches ? footerImageDesktop : footerImageMobile}
            bg2={!matches ? blobFooterDesktop : blobFooterMobile}
            googlePLay={googleIcon}
            appleStore={appleIcon}
        ></ContactStyle>
    )
}

export default Contact
