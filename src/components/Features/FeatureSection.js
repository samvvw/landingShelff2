import { FeatureSectionStyle } from '../styles/FeaturesStyle'

const FeatureSection = ({
    first,
    children,
    tag,
    title,
    description,
    image,
    alt,
}) => {
    return (
        <FeatureSectionStyle
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

export default FeatureSection
