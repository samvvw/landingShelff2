import { FutureFeatureSectionStyle } from '../styles/FeaturesStyle'

const FutureFeatureSection = ({
    first,
    children,
    tag,
    title,
    description,
    image,
    alt,
}) => {
    return (
        <FutureFeatureSectionStyle
            first={first}
            tag={tag}
            title={title}
            description={description}
            image={image}
            alt={alt}
            children={children}
        />
    )
}

export default FutureFeatureSection
