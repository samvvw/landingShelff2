import { TeamMemberCardStyle } from '../styles/WhoWeAreStyle'

const TeamMemberCard = ({ image, imageHover, alt, role, link, name }) => {
    return (
        <TeamMemberCardStyle
            image={image}
            imageHover={imageHover}
            alt={alt}
            role={role}
            link={link}
            name={name}
        />
    )
}

export default TeamMemberCard
