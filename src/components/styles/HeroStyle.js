import styled from 'styled-components'

const HeroComponent = (props) => (
    <div {...props}>
        <img src={props.src} alt={props.alt} />
        <div className="hero-content">{props.children}</div>
    </div>
)

export const HeroStyle = styled(HeroComponent).attrs({
    // id: 'home',
})`
    position: relative;
    overflow-x: hidden;
    overflow-y: clip;
    height: 62.63rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    margin-top: 4rem;
    img {
        position: absolute;
        display: block;
        margin: 0 auto;
        width: 2000px;
        mask: url('data:image/svg+xml;utf8,<svg width="100%" height="100%" viewBox="0 0 1923 1808" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H1920V819.47L726.38 1203.19C637.872 1231.65 541.365 1220.2 461.967 1171.83L0 890.422V0Z" fill="black"/></svg>')
            center/cover no-repeat;
        z-index: 1;
    }

    .hero-content {
        z-index: 11;
        max-width: 1080px;
        padding: 0 1.5rem;
        flex: 1;
        h2 {
            font-size: 4.5rem;
            line-height: 5rem;
            letter-spacing: -0.06rem;
            width: 43.19rem;
            height: 11rem;
            span {
                font-family: 'Michael';
                color: ${({ theme }) => theme.primaryColour.crimson};
            }
        }

        p {
            font-size: 1.25rem;
            line-height: 2rem;
            letter-spacing: -0.06rem;
            width: 28.44rem;
            height: 6rem;
            font-weight: 300;
        }

        a {
            font-size: 1rem;
            line-height: 2rem;
            letter-spacing: -0.06rem;
            text-decoration: none;
            display: block;
            background: ${({ theme }) => theme.primaryColour.crimson};
            color: #f2f2f2;
            width: 9.38rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1.5rem;
        }
    }
    @media (max-width: ${(props) => props.theme.layout.tablet}) {
        overflow-x: hidden;
        overflow-y: clip;
        img {
            width: 1800px;
            mask: url('data:image/svg+xml;utf8,<svg width="1800" height="100%" viewBox="0 0 723 1038" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H644V580.113L317.664 691.748C267.367 708.954 211.955 702.118 167.349 673.203L0 564.726V0Z" fill="black"/></svg>')
                center/cover no-repeat;
        }
        .hero-content {
            min-width: 20.44rem;
            /* display: flex; */
            /* flex-direction: column; */
            h2 {
                font-size: 2.5rem;
                line-height: 3rem;
                letter-spacing: -0.1rem;
                max-width: 20.94rem;
                height: 6.5rem;
                margin-top: 12rem;
                margin-bottom: 45.5rem;
            }
            p {
                line-height: 2.5rem;
                margin-bottom: 1.5rem;
                width: 20.94rem;
                height: 12rem;
            }
        }
    }
`
