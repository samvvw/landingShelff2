import { useState, useEffect } from 'react'
import { FeaturesStyle } from '../styles/FeaturesStyle'
import FeatureSection from './FeatureSection'
import thisIsShelffDesktop from '../../images/myShelffDesktop.png'
import thisIsShelffMobile from '../../images/myShelffMobile.png'
import barCodeScannerDesktop from '../../images/barcodeDesktop.png'
import barCodeScannerMobile from '../../images/barcodeMobile.png'
import notificationsDesktop from '../../images/notificationsDesktop.png'
import notificationsMobile from '../../images/notificationsMobile.png'
import FutureFeatureSection from './FutureFeatureSection'
import donationDesktop from '../../images/donationDesktop.png'
import donationMobile from '../../images/donationMobile.png'
import brownRectangleHill from '../../images/brownRectangleHill.png'
import brownRectangleHillMobile from '../../images/brownRectangleHillMobile.png'

const Features = () => {
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
        <FeaturesStyle>
            <FeatureSection
                tag={'THIS IS SHELFF'}
                description={
                    'Shelff shows you the information you need, and when you need it, so you have one less thing to worry about.'
                }
                image={!matches ? thisIsShelffDesktop : thisIsShelffMobile}
                alt={'This is Shelff'}
            >
                One Platform. A 360° <span>view</span>
            </FeatureSection>
            <FeatureSection
                description={
                    'Entering data manually takes too much time and effort. Let our barcode scanning functionality simplify the process for you. Every item is sorted instantly into categories for easy organization when scanned.'
                }
                first={'image'}
                tag={'BARCODE SCANNER'}
                image={!matches ? barCodeScannerDesktop : barCodeScannerMobile}
                alt={'Barcode Scanner'}
            >
                Log food items <span>effortlessly</span>
            </FeatureSection>
            <FeatureSection
                tag={'NOTIFICATIONS'}
                description={
                    'Stay on top of everything by getting notified on every logged food item and manage them your way so nothing goes bad on your watch ever again.'
                }
                image={!matches ? notificationsDesktop : notificationsMobile}
            >
                Mitigate food waste with <span>notification</span> reminders
            </FeatureSection>
            <FutureFeatureSection
                tag={'FOOD BANK DONATIONS'}
                description={
                    "Shelff is more than food inventory tracking. Donate your unwanted food items to one of our community food bank partners. We'll handle the due diligence and take care of that for you."
                }
                image={!matches ? donationDesktop : donationMobile}
                alt={'Donations'}
                first={'image'}
            >
                <span>Donate</span> your items to your local food bank
            </FutureFeatureSection>
            <div className="feature-divider">
                <img
                    src={
                        !matches ? brownRectangleHill : brownRectangleHillMobile
                    }
                    alt="separator"
                />
            </div>
        </FeaturesStyle>
    )
}

export default Features
