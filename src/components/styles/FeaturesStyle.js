import styled from 'styled-components'

const FeaturesComponent = (props) => <div {...props}>{props.children}</div>

export const FeaturesStyle = styled(FeaturesComponent)`
    position: relative;
    margin-top: 3rem;
    .feature-divider {
        position: absolute;
        bottom: -5px;
        z-index: -1;
        right: 0;
        left: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    @media (max-width: ${({ theme }) => theme.layout.tablet}) {
        .feature-divider {
            width: 100%;
            max-height: 59rem;
            img {
                width: 100%;
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.layout.mobile}) {
        .feature-divider {
            height: 99rem;
        }
    }
`
//////////////////////////

// Feature Section styles

//////////////////////////

const FeatureSectionComponent = (props) => (
    <div {...props}>
        <div className="feature-text">
            <span className="feature-tag">{props.tag}</span>
            <h2>{props.children}</h2>
            <p>{props.description}</p>
        </div>
        <div className="feature-image">
            <img src={props.image} alt={props.alt} />
        </div>
    </div>
)

export const FeatureSectionStyle = styled(FeatureSectionComponent)`
    margin: 0 auto;
    max-width: 1080px;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 14rem;

    .feature-text {
        flex: 1;
        order: ${({ first }) => (first === 'image' ? '2' : '1')};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .feature-tag {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            line-height: 2rem;
            padding: 0.15rem 0.5rem;
            height: 2.06rem;
            border-radius: 0.3rem;
            background-color: ${({ theme }) => theme.secondaryColour.chip};
            color: ${({ theme }) => theme.primaryColour.crimson};
        }

        h2 {
            margin: 0;
            font-size: 3rem;
            span {
                font-family: 'Michael';
                color: ${({ theme }) => theme.primaryColour.crimson};
            }
        }
        p {
            margin: 0;
        }
    }

    .feature-image {
        order: ${({ first }) => (first === 'image' ? '1' : '2')};
        flex: 2;
        /* overflow: hidden; */
        display: flex;
        justify-content: ${({ first }) =>
            first === 'image' ? 'flex-start' : 'flex-end'};
        img {
            max-height: 600px;
        }
    }
    @media (max-width: ${({ theme }) => theme.layout.tablet}) {
        flex-direction: column;
        .feature-text {
            order: 1;
            h2 {
                font-size: 2rem;
            }
            p {
                margin-bottom: 4rem;
            }
        }
        p {
            font-weight: 300;
        }
        .feature-image {
            order: 2;
            img {
                width: 100%;
            }
        }
    }
`

const FutureFeatureSectionComponent = (props) => (
    <div {...props}>
        <div className="feature-text">
            <div className="future-tag-wrapper">
                <span className="feature-tag">{props.tag}</span>
                <span className="feature-coming-soon">COMING SOON...</span>
            </div>
            <h2>{props.children}</h2>
            <p>{props.description}</p>
        </div>
        <div className="feature-image">
            <img src={props.image} alt={props.alt} />
        </div>
    </div>
)

export const FutureFeatureSectionStyle = styled(FutureFeatureSectionComponent)`
    margin: 0 auto;
    max-width: 1080px;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    /* margin-bottom: 14rem; */

    .future-tag-wrapper {
        display: flex;
        gap: 1rem;
        align-items: center;
        color: ${({ theme }) => theme.textColour.light};
        .feature-coming-soon {
            font-weight: 400;
        }
        .feature-tag {
            white-space: nowrap;
        }
    }

    .feature-text {
        flex: 1;
        order: ${({ first }) => (first === 'image' ? '2' : '1')};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .feature-tag {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            line-height: 2rem;
            padding: 0.15rem 0.5rem;
            height: 2.06rem;
            border-radius: 0.3rem;
            background-color: ${({ theme }) => theme.secondaryColour.chip};
            color: ${({ theme }) => theme.primaryColour.crimson};
        }

        h2 {
            margin: 0;
            font-size: 3rem;
            span {
                font-family: 'Michael';
                color: ${({ theme }) => theme.primaryColour.crimson};
            }
            color: ${({ theme }) => theme.textColour.light};
        }
        p {
            margin: 0;
            margin-top: 1rem;
            color: ${({ theme }) => theme.textColour.light};
        }
    }

    .feature-image {
        order: ${({ first }) => (first === 'image' ? '1' : '2')};
        flex: 2;
        display: flex;
        justify-content: center;
        img {
            max-height: 600px;
        }
    }

    @media (max-width: ${({ theme }) => theme.layout.tablet}) {
        flex-direction: column;

        .future-tag-wrapper {
            flex-direction: column;
            align-items: flex-start;
        }
        .feature-text {
            order: 1;
            h2 {
                font-size: 2rem;
            }
            p {
                margin-bottom: 4rem;
            }
        }
        p {
            font-weight: 300;
        }
        .feature-image {
            order: 2;
            img {
                width: 100%;
            }
        }
    }
`
