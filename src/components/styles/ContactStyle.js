import styled from 'styled-components'

const ContactComponent = (props) => (
    <div {...props}>
        <img src={props.bg1} alt={'background1'} id="brown-bg" />
        <img src={props.bg2} alt={'background2'} id="blob" />
        <h2>{props.title}</h2>
        {props.form}

        <div className="footer-cta">
            <span>Coming Soon to...</span>
            <div>
                <img src={props.googlePLay} alt={'google-play'} />
                <img src={props.appleStore} alt={'apple-store'} />
            </div>
        </div>
        <span>{props.note}</span>
    </div>
)

export const ContactStyle = styled(ContactComponent).attrs({ id: 'contact' })`
    margin: 0 auto;
    margin-top: 13rem;
    position: relative;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1080px;
    #brown-bg {
        position: absolute;
        z-index: -1;
    }
    #blob {
        position: absolute;
        z-index: -11;
        right: -9rem;
        top: 0;
    }
    h2 {
        text-align: center;
        font-size: 4.5rem;

        color: #fff;

        span {
            font-family: 'Michael';
            color: ${(props) => props.theme.primaryColour.crimson};
        }
    }
    span {
        color: #fff;
    }
    .footer-cta {
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        margin-bottom: 6rem;
        div {
            display: flex;
            gap: 2rem;
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: ${({ theme }) => theme.layout.tablet}) {
        #brown-bg {
            width: 100%;
            max-height: 90vh;
        }
        #blob {
            /* width: 100%; */
            right: 0;
            top: -8rem;
            width: 50%;
        }
        h2 {
            font-size: 2.38rem;
        }
        .footer-cta {
            flex-direction: column;
        }
    }
`
