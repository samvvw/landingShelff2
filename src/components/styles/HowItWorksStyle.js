import styled from 'styled-components'

const HowItWorksComponent = (props) => (
    <div {...props}>
        {props.children}
        <img src={props.image} alt={props.image} />
    </div>
)

export const HowItWorksStyle = styled(HowItWorksComponent)``
