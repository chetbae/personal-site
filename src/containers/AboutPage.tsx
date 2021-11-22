import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { typography, containers, device } from '../styles';
import { SideNav } from '../components/SideNav';
import lightPhoto from '../assets/trumpetPhoto.jpg';
import darkPhoto from '../assets/garibaldiPhoto.jpg';
import resume from '../assets/resume.pdf';
import { ReactComponent as Icon } from '../assets/download-icon.svg';

const linkedIn = 'https://www.linkedin.com/in/max-zhang-608444176/';
const gitHub = 'https://github.com/chetbae';
const instagram = 'https://www.instagram.com/mx.yz/';
const email = 'mailto: maxzhangvancouver@gmail.com';

const AboutContainer = styled(containers.PageContainer)`
    @media ${device.tablet} {
        width: 75%;
        margin: 0% 15% 0% 5%;
    }
`;

const Column = styled.div`
    width: 50%;
    padding-right: 9%;
    float: left;
    background-color: gree;

    @media ${device.tablet} {
        width: 16%;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
        display: inline;
    }
`;

const Body = styled.div`
    @media ${device.tablet} {
        padding-left: 50%;
    }
    @media ${device.desktop} {
        padding-left: 30%;
        width: 50%;
    }
`;

const AboutHeading = styled(typography.Body)`
    color: ${( props:any ) => props.theme.base};
    letter-spacing: 0rem;
`;

const AboutImage = styled.img`
    width: 100%;
    height: auto;
    float: left;

    @media ${device.tablet} {
        width: 45%;
        max-width: 25rem;
    }
`;

const StyledIcon = styled(Icon)`
    width: 1.3rem;
    fill: ${( props:any ) => props.theme.primary};
    position: relative;
    top: 0.3rem;
    background-color: re;
`;

const StyledLink = styled(typography.LinkBody)`
    @media ${device.tablet} {
        margin-right: 5%;
    }
`;

export const AboutPage = () => {
    const themeContext:any = useContext(ThemeContext);
    const isDark = themeContext.id === 'dark';

    return(
        <AboutContainer>
            <SideNav/>
            <containers.ContentContainer>
                <Row>
                    <AboutImage src={ isDark ? darkPhoto : lightPhoto}/>
                    <Body>
                        <AboutHeading>
                            Hi! It's nice to meet you. <br />
                        </AboutHeading>
                        <typography.SmallBody>
                        I enjoy the flow programming adds to my life. 
                        Through solving complex problems that each project poses, I find myself eager to learn, and rising to the challenge - in doing so, creating order and meaning in my day-to-day.
                        With the various disciplines I handle, I hope to create tools that inspire and contribute positivity to other lives.
                        <br /><br />
                        I am currently a student at McGill University with a focus in Computer Science and Music Performance.
                        In the music department, I have had the opportunity to work with, learn from, and perform alongside internationally acclaimed musicians. 
                        To imagine my life without this medium of music is quite impossible. 
                        It's been a powerful driving force since my early life, and I'm grateful for it and all the great folks I've met through it. (I play trumpet)
                        <br /><br />
                        My foray with code started with an introductory programming class in university; it's been history ever since.
                        I'm looking to gain more experience in the industry and excited to see what a career in software engineering brings! Besides my two main passions, I started rock climbing during the pandemic (it was either that or bread-making) and I'm trying to take to an elite level.
                        <br /><br />
                        I'd love to hear from you! maxzhangvancouver@gmail.com
                        </typography.SmallBody>
                    </Body>
                </Row>  
                <br/>
                <containers.TopLarge>
                    <Row>
                        <Column>
                            <AboutHeading>Education</AboutHeading>
                            <typography.SmallBody>
                                McGill University<br />
                                2018-2023<br /> 
                                <br />
                                Bachelor of Music<br />
                                Double Major in Computer Science and Music Performance<br />
                                <br />
                                Cumulative GPA 3.7 / 4.0<br />
                            </typography.SmallBody>
                        </Column>
                        <Column>
                            <AboutHeading>Experience</AboutHeading>
                            <typography.SmallBody>
                                McGill University<br />
                                Orchestra Librarian<br />
                                September 2019 - present<br />
                                Montréal, QC<br />
                                <br />
                                South Delta Jazz Festival<br />
                                Music TA<br />
                                Summer 2019<br />
                                Delta, BC<br />
                                <br />
                                VSO School of Music<br />
                                Music TA<br />
                                Summer 2018<br />
                                Vancouver, BC<br />
                                <br />
                                Musician<br />
                                Studio / Concerts / Lessons<br />
                                2017 - present<br />
                                <br />
                                Attendee and Hacker at:<br />
                                Hack the North<br />
                                CodeJam<br />
                                McHacks 




                            </typography.SmallBody>
                        </Column>
                        <Column>
                            <AboutHeading>Skills</AboutHeading>
                            <typography.SmallBody>
                                Software Design <br />
                                Algorithms & Data Structures <br />
                                Frontend Development<br />
                                Applied Machine Learning<br />
                                Functional Programming<br />
                                <br />
                                Java<br />
                                Python<br />
                                HTML, CSS<br />
                                Javascript, Typescript<br />
                                ReactJS<br />
                                NodeJS<br />
                                Git<br />
                                <br />
                                Music Performance<br />
                                Music Composition<br />
                                Music Production<br />
                                Teaching<br />
                            </typography.SmallBody>
                        </Column>
                        <Column>
                        <   AboutHeading>Awards</AboutHeading>
                            <typography.SmallBody>
                            Lallemand Award in Music<br />
                            Fall 2020<br />
                            <br />

                            University Scholarships:<br />
                            &nbsp;- McGill 4,000<br />
                            &nbsp;- UofT 6,000<br />
                            &nbsp;- The New School 16,000<br />
                            &nbsp;- Berklee 31,000<br />
                            Fall 2018<br />
                            <br />

                            BC Arts Council Scholarship<br />
                            Summer 2018<br />
                            <br />
                            
                            Dal Richards Scholarship<br />
                            Summer 2018<br />
                            <br />

                            Lionel Hampton Jazz Festival Top Soloist<br />
                            2017 - 2018<br />
                            <br />

                            Surrey Jazz Festival Awards<br />
                            2014 - 2018<br />
                            <br />
                            </typography.SmallBody>
                        </Column>
                        &nbsp;
                    </Row>
                </containers.TopLarge>

                <br/>
                <Row>
                    <StyledLink href={email} target='_blank' >
                        email
                    </StyledLink>
                    <StyledLink href={gitHub} target='_blank' >
                        GitHub
                    </StyledLink>
                    <StyledLink href={instagram} target='_blank' >
                        Instagram
                    </StyledLink>
                    <StyledLink href={linkedIn} target='_blank' >
                        LinkedIn
                    </StyledLink>
                    <StyledLink href={resume} target='_blank' >
                        CV<StyledIcon />
                    </StyledLink>
                </Row>
                <br /><br /><br /><br />
            </containers.ContentContainer>
        </AboutContainer>
    )
}

/*

I care about the focus and flow programming adds to my life.
With the various disciplines I handle, I hope to create tools that inspire and contribute positivity to other lives.

I am currently a college student at McGill University, focusing on a double major in Computer Science and Music Performance.
Before, I was in highschool, performing internationally with the award-winning Jazz Band at Semiahmoo Secondary in Surrey, BC.
Since then, I have been doing professional work as a musician in Vancouver and Montreal.

My foray with code started with an introductory programming class in university; it's been history ever since.
I'm interested in Software Design, ML, Audio DSP, and overly enthuasiastic about music technology.

I'd love to hear from you! maxzhangvancouver@gmail.com

*/