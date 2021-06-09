import styled from 'styled-components';
import { typography, containers, device } from '../../styles';
import menudisplay_image from '../../assets/menudisplay.gif';

const link = "https://www.github.com/chetbae/interactive-menu-display";

const Column3 = styled.div`
    @media ${device.tablet} {
        width: 28%;
        padding-right: 6%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
`;

export const MenuDisplay = () => {
    return(
        <containers.ContentContainer>
            <typography.LinkBody href={link} target="_blank">
                Menu Display
            </typography.LinkBody>
            <containers.TopSmall/>
            <containers.Row>
                <Column3>
                    <typography.Body>
                        Why
                    </typography.Body>
                    <typography.SmallBody>
                        McGill COMP303 Software Design course final project.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>
                        What
                    </typography.Body>
                    <typography.SmallBody>
                        An application to manage a restaurant menu. Information entered, updated, and removed are refelcted in the display instantaneously.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>
                        How
                    </typography.Body>
                    <typography.SmallBody>
                        Java, JavaFX. Use of good design principles and agile development process.
                    </typography.SmallBody>
                </Column3>
            </containers.Row>

            <containers.TopMedium/>
            <StyledImage src={menudisplay_image} alt="ps" />
            <containers.TopMedium/>

        </containers.ContentContainer>
    );
};