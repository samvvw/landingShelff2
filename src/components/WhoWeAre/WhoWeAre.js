import { WhoWeAreStyle } from '../styles/WhoWeAreStyle'
import TeamMemberCard from './TeamMemberCard'
import alejandra from '../../images/TeamPics/alejandra_hernadez_dev.webp'
import alejandra2 from '../../images/TeamPics/alejandra_hernandez_dev_2.webp'
import megumi from '../../images/TeamPics/megumi_takashima_dev.webp'
import megumi2 from '../../images/TeamPics/megumi_takashima_dev_2.webp'
import jose from '../../images/TeamPics/jose_arteaga_dev.webp'
import jose2 from '../../images/TeamPics/jose_arteaga_dev_2.webp'
import samuel from '../../images/TeamPics/samuel_villegas_dev.webp'
import samuel2 from '../../images/TeamPics/samuel_villegas_dev_2.webp'
import lilian from '../../images/TeamPics/lilian_fajardo_designer.webp'
import lilian2 from '../../images/TeamPics/lilian_fajardo_designer_2.webp'
import elnaz from '../../images/TeamPics/elnaz_behravesh_designer.webp'
import elnaz2 from '../../images/TeamPics/elnaz_behravesh_designer_2.webp'
import tayo from '../../images/TeamPics/tayo_adetola_designer.webp'
import tayo2 from '../../images/TeamPics/tayo_adetola_designer_2.webp'

const WhoWeAre = () => {
    return (
        <WhoWeAreStyle
            tag="WHO WE ARE"
            title={
                <>
                    A <span>team</span> of design and technology prowess
                </>
            }
        >
            <TeamMemberCard
                name={'Alejandra Hernandez'}
                image={alejandra}
                imageHover={alejandra2}
                alt={'Alejandra Hernandez'}
                role={'Developer'}
            />
            <TeamMemberCard
                name={'Megumi Takashima'}
                image={megumi}
                imageHover={megumi2}
                alt={'Megumi Takashima'}
                role={'Developer'}
            />
            <TeamMemberCard
                name={'Jose Arteaga'}
                image={jose}
                imageHover={jose2}
                alt={'Jose Arteaga'}
                role={'Developer'}
            />
            <TeamMemberCard
                name={'Samuel Villegas'}
                image={samuel}
                imageHover={samuel2}
                alt={'Samuel Villegas'}
                role={'Developer'}
            />
            <TeamMemberCard
                name={'Lilian Fajardo'}
                image={lilian}
                imageHover={lilian2}
                alt={'Lilian Fajardo'}
                role={'Designer'}
            />
            <TeamMemberCard
                name={'Elnaz Behravesh'}
                image={elnaz}
                imageHover={elnaz2}
                alt={'Elnaz Behravesh'}
                role={'Designer'}
            />
            <TeamMemberCard
                name={'Tayo Adetola'}
                image={tayo}
                imageHover={tayo2}
                alt={'Tayo Adetola'}
                role={'Designer'}
            />
        </WhoWeAreStyle>
    )
}

export default WhoWeAre
