import styled from 'styled-components';
import { typography, containers, device } from '../../styles';

const link = "https://www.github.com/chetbae/personal-site";

const Column3 = styled.div`
    @media ${device.tablet} {
        width: 28%;
        padding-right: 6%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
`;

export const PersonalSite = () => {
    return(
        <containers.ContentContainer>
            <typography.LinkBody href={link} target="_blank">
                Personal Site
            </typography.LinkBody>
            <containers.TopSmall/>
            <containers.Row>
                <Column3>
                    <typography.Body>
                        Why
                    </typography.Body>
                    <typography.SmallBody>
                    During the remote-learning year of '20/'21, I began the process of applying to student internships. 
                    I erected a makeshift site to display my bio, goals, and amassed projects. 
                    Since then, with more time on my hands, I decided to engineer a better website to present my portfolio and also get familiar with unfamiliar technologies.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>
                        What
                    </typography.Body>
                    <typography.SmallBody>
                    This is a personal website developed with React, Typescript, bootstrapped with create-react-app, hosted through Heroku with a custom domain from google domains.
                    <br />
                    <br />
                    You're on it right now. :)
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>
                        How
                    </typography.Body>
                    <typography.SmallBody>
                    I started with inspiration from aesthetic websites, modern styles, and thinking about what I wanted out of this site. I then began planning on paper.
                    With the template from create-react-app, I implemented the higher-level structures such as styles, containers, components, then added in each page and their respective content. 
                    <br /><br />
                    This was a re-iterative process and completed with patience and an abundance of coffee.
                    </typography.SmallBody>
                </Column3>
            </containers.Row>

            <containers.TopMedium/>
            <StyledImage src="https://user-images.githubusercontent.com/48145854/121237706-322fdf80-c84c-11eb-96fe-ff5756b8ff71.jpg" alt="ps" />
            <containers.TopMedium/>
            <StyledImage src="https://user-images.githubusercontent.com/48145854/121237678-2cd29500-c84c-11eb-8657-cc287ece4848.jpg" alt="ps" />
            <containers.TopMedium/>
            <StyledImage src="https://user-images.githubusercontent.com/48145854/121238859-6a83ed80-c84d-11eb-9383-68cb336e70fe.png" alt="ps" />
            <containers.TopMedium/>
            <StyledImage src="https://user-images.githubusercontent.com/48145854/121238902-77a0dc80-c84d-11eb-95a9-558187b8b2a3.png" alt="ps" />
            <containers.TopMedium/>

        </containers.ContentContainer>
    );
};