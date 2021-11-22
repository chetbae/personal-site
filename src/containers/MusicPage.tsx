import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { typography, containers, device } from '../styles';
import { SideNav } from '../components/SideNav';
import isa1 from '../assets/isabella1.mp3';
import isa2 from '../assets/isabella2.mp3';
import isa3 from '../assets/isabella3.mp3';
import isaclip from '../assets/isaclip.mp4';

const vid1 = "https://www.youtube.com/embed/TOuo0A9vtR8?autoplay=0&mute=0";
const vid2 = "https://www.youtube.com/embed/BcYCA8hy-NE?autoplay=0&mute=0";
const caity = "https://www.youtube.com/embed/Kw-dDzTKXS4"

const StyledMedia = styled.div`
    padding-bottom: 10%;
    padding-right: 40px;    
`

const StyledVideo = styled.iframe`
    width: 100%;
    height: 315px;
    border: 0;

    @media ${device.tablet} {
        width: 560px;
    }
`;

const StyledLabel = styled(typography.Body)`
    font-size: 0.75rem;
`

const MusicRow = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;

    @media ${device.tablet} {
        flex-direction: row;
    }
`


export const MusicPage = () => {
    const themeContext:any = useContext(ThemeContext);
    const isDark = themeContext.id === 'dark';


    return(
        
            <containers.SiteContainer>
                <containers.PageContainer>
                    <SideNav />     
                    <containers.ContentContainer>
                        <typography.LargeHeading>
                            Max Zhang
                        </typography.LargeHeading>
                        

                        <typography.Body>
                            {isDark ? 'These are moments of happiness':'A collection of my musical experiences.' }
                        
                        <containers.TopMedium>
                            <MusicRow>
                                <StyledMedia>
                                    <video height='500px' loop muted autoPlay><source src={isaclip} type='video/mp4'/></video>
                                </StyledMedia>
                                <div>
                                    November 2021 <br/><br/>
                                    Live at La Petite Marche with the Isabella Rachiele trio ft. Alex Muscalu. <br/><br/>
                                    (bass)
                                    <containers.TopMedium>  
                                        <StyledLabel>Beautiful Love (written by V. Young)</StyledLabel>
                                        <audio controls>
                                            <source src={isa1} type="audio/mp3"/>
                                        </audio>   
                                                
                                        <StyledLabel>Triste (written by A. C. Jobim)</StyledLabel>
                                        <audio controls>
                                            <source src={isa2} type="audio/mp3"/>
                                        </audio>

                                        <StyledLabel>Ain't Misbehavin' (written by F. Waller)</StyledLabel>
                                        <audio controls>
                                            <source src={isa3} type="audio/mp3"/>
                                        </audio>
                                    </containers.TopMedium> 
                                </div>
                            </MusicRow>

                            <MusicRow>
                            <StyledMedia><StyledVideo src={caity} alt="caity" /></StyledMedia>
                                October 2021 <br/><br/>
                                Kensington Market Jazz Festival with the Caity Gyorgy trio ft. Michael Bruzzeze. <br/><br/>
                                (bass)
                            </MusicRow>

                            <MusicRow>
                                <StyledMedia><StyledVideo src={vid1} alt="jacob" /></StyledMedia>
                                Feb 2020 <br/><br/>
                                Recording session with the Jacob Do Sextet. <br/><br/>
                                (tpt, flug)
                            </MusicRow>

                            <MusicRow>
                            <StyledMedia><StyledVideo src={vid2} alt="video" /></StyledMedia>
                                July 2020 <br/><br/>
                                Remote recording project with Isabella Rachiele.<br/><br/>
                                (gtr, tpt, prod)
                            </MusicRow>

                            <typography.SmallBody>
                                (I love you Laufey)

                            </typography.SmallBody>

                            
                        </containers.TopMedium>
                        </typography.Body>
                        
                    </containers.ContentContainer>
                </containers.PageContainer>
            </containers.SiteContainer>
    );
};