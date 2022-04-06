import styled from 'styled-components'
import { ReactComponent as LogoIcon } from '../../assets/logo.svg'
import { ReactComponent as LogoText } from '../../assets/logoText.svg'
import { ReactComponent as HamburgerIcon } from '../../assets/hamburger.svg'
import { ReactComponent as CloseIcon } from '../../assets/close.svg'

export const HeaderWrapper = styled.div`
    width: 100%;
    position: fixed;
    z-index: 19;
    top: 0;
    background-color: #fff;
    @media (max-width: ${({ theme }) => theme.layout.tablet}) {
    }
    li {
        cursor: pointer;
    }
`

export const HeaderStyle = styled.div`
    margin: 0 auto;
    max-width: 1080px;
    height: 4.81rem;
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
`

const LogoComponent = (props) => (
    <div {...props}>
        <LogoIcon />
        <LogoText />
    </div>
)

export const LogoWrapper = styled(LogoComponent)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 9.5rem;
`
const HeaderLinksComponent = (props) => (
    <div {...props}>
        <ul>{props.children}</ul>
    </div>
)

export const HeaderLinks = styled(HeaderLinksComponent)`
    max-width: 20.31rem;
    ul {
        padding: 0;
        width: 100%;
        display: flex;
        list-style: none;
        gap: 1.5rem;
        li {
            font-size: 0.88rem;
            font-weight: bold;
            a {
                text-decoration: none;
                color: #000;
            }
        }
    }
`
const HamburgerComponent = (props) => (
    <div {...props}>
        <HamburgerIcon />
    </div>
)

export const HamburgerButton = styled(HamburgerComponent)`
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    &:hover {
        box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.06);
    }
`
const DrawerComponent = (props) => (
    <div {...props}>
        <CloseIcon onClick={props.onClose} />
        <ul>{props.children}</ul>
    </div>
)

export const Drawer = styled(DrawerComponent)`
    @media (min-width: ${({ theme }) => theme.layout.tablet}) {
        display: none;
    }
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 100;
    svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        z-index: 101;
    }
    ul {
        list-style: none;
        padding: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem;
        align-items: center;

        li {
            font-weight: bold;
            a {
                text-decoration: none;
                color: #000;
            }
        }
    }
    transition: top 0.3s ease-in-out;
    ${(props) => props.isOpen && 'top: 0;'}
`
