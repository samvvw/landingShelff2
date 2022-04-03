import { HeroStyle } from '../styles/HeroStyle'
import imageHeader from '../../images/imageHeader.png'

const Hero = () => {
    return (
        <HeroStyle src={imageHeader}>
            <h2>
                Keep an eye on your food - <span>literally</span>
            </h2>
            <p>
                Shelff is an effortlessly way to organize and track the shelf
                life of your food inventory. Our goal is to make you never waste
                food again.
            </p>
            <a href="#">Learn More</a>
        </HeroStyle>
    )
}

export default Hero
