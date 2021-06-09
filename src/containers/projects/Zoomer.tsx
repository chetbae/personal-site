import styled from 'styled-components';
import { typography, containers, device } from '../../styles';

const link = "https://www.github.com/chetbae/zoomer";

const Column3 = styled.div`
    @media ${device.tablet} {
        width: 28%;
        padding-right: 6%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
`;

export const Zoomer = () => {
    return(
        <containers.ContentContainer>
            <typography.LinkBody href={link} target="_blank">
                Zoom Clone
            </typography.LinkBody>
            <containers.TopSmall/>
            <containers.Row>
                <Column3>
                    <typography.Body>
                        Why
                    </typography.Body>
                    <typography.SmallBody>
                        To get familiar with web full-stack applications. Especially after a year of online learning, I wanted to get to know the in and outs of video-calling over the internet.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>
                        What
                    </typography.Body>
                    <typography.SmallBody>
                        A video-calling web application featuring unique rooms, client-to-client connection through initial server operations, and accesibility controls for audiovisuals.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>
                        How
                    </typography.Body>
                    <typography.SmallBody>
                    With the help of Youtuber Web Dev Simplified's tutorial, I got hands-on with setting up a video-calling application over the net with webRTC protocols and socket.io. 
                    Then, with the goal of hosting on Heroku, I integrated PeerJS into the application to unify the server-side operations.
                    </typography.SmallBody>
                </Column3>
            </containers.Row>

            <containers.TopMedium/>
            <StyledImage src="https://user-images.githubusercontent.com/48145854/117729109-3dd1ad00-b19f-11eb-992f-0bb5c7548ba9.png" alt="ps" />
            {/* <containers.TopMedium/>
            <StyledImage src="https://user-images.githubusercontent.com/48145854/121237678-2cd29500-c84c-11eb-8657-cc287ece4848.jpg" alt="ps" />
            <containers.TopMedium/>
            <StyledImage src="https://user-images.githubusercontent.com/48145854/121238859-6a83ed80-c84d-11eb-9383-68cb336e70fe.png" alt="ps" />
            <containers.TopMedium/>
            <StyledImage src="https://user-images.githubusercontent.com/48145854/121238902-77a0dc80-c84d-11eb-95a9-558187b8b2a3.png" alt="ps" /> */}
            <containers.TopMedium/>

        </containers.ContentContainer>
    );
};