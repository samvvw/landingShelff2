import styled from 'styled-components'

const WhoWeAreComponent = (props) => (
    <div {...props}>
        <div className="team-tag">
            <span>{props.tag}</span>
        </div>
        <h2>{props.title}</h2>
        <div className="team-container">{props.children}</div>
    </div>
)

export const WhoWeAreStyle = styled(WhoWeAreComponent)`
    margin: 0 auto;
    margin-top: 4rem;
    max-width: 1080px;
    .team-tag span {
        margin: 0 1.5rem;
        color: ${(props) => props.theme.primaryColour.crimson};
        background-color: ${(props) => props.theme.secondaryColour.chip};
        padding: 0.5rem 1rem;
    }
    h2 {
        padding: 0 1.5rem;
        font-size: 3rem;
        span {
            color: ${(props) => props.theme.primaryColour.crimson};
            font-family: 'Michael';
        }
    }
    .team-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        justify-items: center;
        flex-wrap: wrap;
        gap: 2rem;
    }
`

const TeamMemberCardComponent = (props) => (
    <div {...props}>
        <div className="team-member-image">
            <img id="regular-image" src={props.image} alt={props.alt} />
            <img id="hover-image" src={props.imageHover} alt={props.alt2} />
            <div className="team-member-role-wrapper">
                <span>{props.role}</span>
                <a href={props.link}>
                    <i class="fa fa-linkedin"></i>
                </a>
            </div>
        </div>
        <div className="team-member-name-wrapper">
            <span>{props.name}</span>
        </div>
    </div>
)

export const TeamMemberCardStyle = styled(TeamMemberCardComponent)`
    max-width: 16.13rem;

    .team-member-image {
        width: 100%;
        border-radius: 1rem;
        overflow: hidden;
        position: relative;
        img {
            width: 100%;
        }
        #hover-image {
            display: none;
        }

        .team-member-role-wrapper {
            position: absolute;
            bottom: 1rem;
            left: 1rem;
            display: flex;
            gap: 0.5rem;
            span {
                background-color: ${(props) =>
                    props.theme.primaryColour.violetRed};
                color: ${(props) => props.theme.textColour.light};
                border-radius: 0.25rem;
                padding: 0.2rem 0.75rem;
            }
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 2rem;
                width: 2rem;
                border-radius: 50%;
                background-color: ${(props) =>
                    props.theme.secondaryColour.chip};
                i {
                    color: ${(props) => props.theme.primaryColour.crimson};
                }
            }
        }
    }
    &:hover {
        #regular-image {
            display: none;
        }

        #hover-image {
            display: initial;
        }
    }
    .team-member-name-wrapper {
        font-size: 2.25rem;
    }
`
