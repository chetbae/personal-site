import styled from "styled-components";
import { typography, containers, device } from "../../styles";

const link = "https://www.github.com/DDMAL/vim";

const Column3 = styled.div`
    @media ${device.tablet} {
        width: 28%;
        padding-right: 6%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
`;

export const Vim = () => {
    return (
        <containers.ContentContainer>
            <typography.LinkBody href={link} target="_blank">
                Virtual Instrument Museum
            </typography.LinkBody>
            <containers.TopSmall />
            <containers.Row>
                <Column3>
                    <typography.Body>Why</typography.Body>
                    <typography.SmallBody>
                        (under construction)
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>What</typography.Body>
                    <typography.SmallBody>
                        A crowdsourced collection of instrument names across the
                        world. Created with Figma, Django, Docker, and HTML/CSS
                        + ES6.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>How</typography.Body>
                    <typography.SmallBody>
                        From a grant for LinkedMusic, a team of DDMAL developers
                        are creating a web application to meet the requirements
                        and specifications of this specific mission.
                    </typography.SmallBody>
                </Column3>
            </containers.Row>

            <containers.TopMedium />
            <typography.Body>
                Check back in the future to see our progress!
            </typography.Body>
            <containers.TopMedium />
        </containers.ContentContainer>
    );
};
