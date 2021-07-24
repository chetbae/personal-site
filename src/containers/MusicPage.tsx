import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { typography, containers, device } from '../styles';
import { SideNav } from '../components/SideNav';

const vid1 = "https://www.youtube.com/embed/TOuo0A9vtR8?autoplay=1&mute=1";
const vid2 = "https://www.youtube.com/embed/BcYCA8hy-NE?autoplay=1&mute=1";

const StyledVideo = styled.iframe`
    width: 100%;
    height: 315px;
    border: 0;

    @media ${device.tablet} {
        width: 560px;
    }
`;

export const MusicPage = () => {
    const themeContext:any = useContext(ThemeContext);
    const isDark = themeContext.id === 'dark';
    
    return(
            <containers.SiteContainer>
                <containers.PageContainer>
                    <SideNav />     
                    <containers.ContentContainer>
                        <typography.LargeHeading>
                            Music 🎺 ; 
                        </typography.LargeHeading>
                        <typography.LargeHeading1>
                            TO BE UPDATED...
                            asdasdasdasdas
                        </typography.LargeHeading1>

                        <StyledVideo src={ isDark ? vid2 : vid1 } alt="video" />

                    </containers.ContentContainer>
                </containers.PageContainer>
            </containers.SiteContainer>
    );
};