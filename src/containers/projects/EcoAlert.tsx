import styled from 'styled-components';
import { typography, containers, device } from '../../styles';
import ecoalert_slides from '../../assets/designforchange-slides.pdf';
import journeymap from '../../assets/journeymap.png';
import pdf from '../../assets/ecoalert-notion.pdf';
import figma from '../../assets/Figma-logo.svg';

const Column3 = styled.div`
    @media ${device.tablet} {
        width: 28%;
        padding-right: 6%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
`;

export const EcoAlert = () => {
    return(
        <containers.ContentContainer>
            <typography.LinkBody href={pdf} target="_blank">
                EcoAlert
            </typography.LinkBody>
            <containers.TopSmall/>
            <containers.Row>
                <Column3>
                    <typography.Body>
                        Why
                    </typography.Body>
                    <typography.SmallBody>
                        We wanted to create a eco-friendly options for consumers when shopping for products online. This was a challenge/designathon held by Design For Change 2021 for UX/UI students and young professionals. 
                        <br/>
                        <br/>
                        For me, this was an opportunity to gain more experience in design-orientated thinking and the UX process.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>
                        What
                    </typography.Body>
                    <typography.SmallBody>
                    Our solution is to create a browser extension which would automatically find eco-friendly alternatives for when users shop online. This solution is easily incorporated into a person’s regular life as many climate change solution are difficult to initiate or follow. Our design fulfills our goals of: reminding users if they actually need the product before buying. If the item is eco- friendly, and if not, help users navigate to a more eco-friendly option.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>
                        How
                    </typography.Body>
                    <typography.SmallBody>
                    First, our team consisting of Amy Zhang, Jerry Feng, and myself defined the problem space. To do this, we researched the topic at hand, conducted user interviews, and using journey-maps and other tools, arrived to solid data.
                    <br/><br/>
                    Ideation followed. After arriving on the final concept, we refined the design after user testing and prototyping using Figma usability studies.
                    <br/><br/>
                    Then, identifying the bright spots and pain points and adjusting, we arrived at a product design that we were confident to present! 
                    </typography.SmallBody>
                </Column3>
            </containers.Row>

            <containers.TopMedium/>
            <StyledImage src={journeymap} alt="journeymap" />
            <typography.SmallBody>
                Journey Map
            </typography.SmallBody>
            <containers.TopMedium/>
            <typography.LinkBody href="https://www.figma.com/proto/VI0P5EcCq7yoBeI5YgAeIp/EcoAlert?node-id=22%3A351&scaling=min-zoom" target="_blank">
                IOS Prototype <img width="20rem" src={figma} alt="figma"/> 
            </typography.LinkBody>
            <containers.TopMedium/>
            <typography.LinkBody href={ecoalert_slides} target="_blank">
                Presentation
            </typography.LinkBody>
            <containers.TopMedium/>

        </containers.ContentContainer>
    );
};