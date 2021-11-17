import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { typography, containers, device } from '../styles';
import { SideNav } from '../components/SideNav';

const LandingContainer = styled.div`
    transition: all 0.5s ease;
`;

const BodyContainer = styled.div`
    margin-left: 0.2rem;

    @media ${device.tablet} {
        margin-left: 1.4rem;
    }
`;

const ListContainer = styled.ul`
    @media ${device.tablet} {
        margin-left: 2.5rem;
    }
`;

const ListItem = styled.li`
    line-height: 1.5rem;

    &::marker{
        content: '●     ';
        color: ${( props:any ) => props.theme.primary};
        font-size: 0.8rem;
    }
`;

const ImMax = styled(typography.LargeHeading1)`
    @media ${device.mobileL} {
        padding-left: 5rem;
    }
`;

export const LandingPage = () => {
    const themeContext:any = useContext(ThemeContext);
    const isDark = themeContext.id === 'dark';

    return(
        <containers.PageContainer>
            <SideNav />     
            <containers.ContentContainer>

                <LandingContainer>
                    <typography.LargeHeading>
                        { isDark ? 'Howdy!' : 'Hello,' }<br />
                    </typography.LargeHeading>
                    <ImMax>
                        I'm Max{ isDark ? ' 🤠' : '' }.
                    </ImMax>

                    <BodyContainer>
                        <containers.TopMedium>
                            <typography.Heading>
                                right now ...
                            </typography.Heading>

                            <ListContainer>
                                <ListItem>
                                    <typography.Body>
                                        seeking spring and summer 2022 software engineering internships
                                    </typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>
                                        researching&nbsp;
                                        <typography.LinkBody 
                                            href="https://github.com/chetbae/machine-learning" 
                                            target='_blank' >
                                            machine learning
                                        </typography.LinkBody>
                                        &nbsp;and&nbsp;
                                        <typography.LinkBody 
                                            href="https://github.com/chetbae/programming-languages-and-paradigms" 
                                            target='_blank' >
                                            programming languages + paradigms
                                        </typography.LinkBody>
                                        &nbsp;at McGill University (Montreal, QC)
                                    </typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>
                                        obsessed with&nbsp;
                                        <typography.LinkBody 
                                            href="https://www.instagram.com/max.sends/" 
                                            target='_blank' >
                                            rock climbing! 🧗‍♂️
                                        </typography.LinkBody>
                                    </typography.Body>
                                </ListItem>
                            </ListContainer>

                        </containers.TopMedium>

                        <containers.TopSmall>
                            <typography.Heading>
                                before, i was...
                            </typography.Heading>

                            <ListContainer>
                                <ListItem>
                                    <typography.Body>
                                        studying music performance + computer science at McGill
                                    </typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>
                                        making&nbsp;
                                        <typography.LinkBody 
                                            href="https://github.com/chetbae" 
                                            target='_blank'>
                                            productivity apps
                                        </typography.LinkBody>
                                        &nbsp;for students at McHacks, HacktheNorth++ ...
                                    </typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>
                                        performing&nbsp; 
                                        <typography.LinkBody 
                                            href="https://musicmaxzhang.wixsite.com/maxzhangmusic" 
                                            target='_blank' >
                                            JAZZ🎺
                                        </typography.LinkBody> 
                                        &nbsp;music in and around Montréal & Vancouver
                                    </typography.Body>
                                </ListItem>
                            </ListContainer>
                        </containers.TopSmall>
                    </BodyContainer>

                </LandingContainer>
            
            </containers.ContentContainer>
        </containers.PageContainer>
    )
}