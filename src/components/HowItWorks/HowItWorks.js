import { HowItWorksStyle } from '../styles/HowItWorksStyle'
import brownRectangle from '../../images/brownRectangle.png'

const HowItWorks = () => {
    return (
        <HowItWorksStyle src={brownRectangle} alt={'Video'}>
            <iframe
                frameborder="0"
                src="https://www.youtube.com/embed/F0EYVQSZNds"
                title="How it works - Shelff"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </HowItWorksStyle>
    )
}

export default HowItWorks
