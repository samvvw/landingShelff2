import styled from 'styled-components'

const HowItWorksComponent = (props) => (
    <div {...props}>
        <div className="video-wrapper">{props.children}</div>
        <img src={props.src} alt={props.alt} />
    </div>
)

export const HowItWorksStyle = styled(HowItWorksComponent)`
    position: relative;

    display: flex;
    justify-content: center;
    overflow: hidden;

    .video-wrapper {
        flex: 1;
        max-width: 90%;
        padding: 0 1.5rem;
    }
    iframe {
        width: 100%;
        border-radius: 5px;
        height: 500px;
    }
    img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -10;
        height: 50%;
        width: 100%;
    }
`
