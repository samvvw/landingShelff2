import { ContentWrapperStyle, LayoutStyle } from "../styles/LayoutStyle";


const Layout = ({ children }) => {
    return (
        <LayoutStyle>
        <ContentWrapperStyle>
            {children}
        </ContentWrapperStyle>
        </LayoutStyle>
    )
}

export default Layout