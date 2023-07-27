import styled from "styled-components";
import { typography, containers, device } from "../../styles";
import neonhomepage from "../../assets/neon-homepage.png";
import neondashboard from "../../assets/neon-dashboard.png";
import neon from "../../assets/neon.png";

const link = "https://www.github.com/DDMAL/Neon";

const Column3 = styled.div`
    @media ${device.tablet} {
        width: 28%;
        padding-right: 6%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
`;

export const Neon = () => {
    return (
        <containers.ContentContainer>
            <typography.LinkBody href={link} target="_blank">
                NEume Online Editor (NEON)
            </typography.LinkBody>
            <containers.TopMedium />
            <containers.Row>
                <Column3>
                    <typography.Body>Why</typography.Body>
                    <typography.SmallBody>
                        The editor can be used to manipulate digitally encoded
                        early musical scores in square-note notation. During
                        summer 2022, a new user interface for Neon was released
                        to keep up with modern web standards and the
                        architecture for the dashboard and editor was merged
                        into one allowing easier development. The dashboard was
                        further improved with a file system in 2023. Otherwise,
                        the editor is maintained and tested continually.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>What</typography.Body>
                    <typography.SmallBody>
                        A frontend music notation editor built with Typescript,
                        HTML/CSS, C++, and Verovia, with Cypress for testing and
                        Github Pages for hosting.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>How</typography.Body>
                    <typography.SmallBody>
                        A team of developers worked on the user interface, bug
                        fixes in the custom Verovio fork, and architecture.
                    </typography.SmallBody>
                </Column3>
            </containers.Row>

            <containers.TopMedium>
                <containers.TopMedium>
                    <StyledImage src={neonhomepage} alt="ps" />
                </containers.TopMedium>
                <containers.TopMedium>
                    <StyledImage src={neondashboard} alt="ps" />
                </containers.TopMedium>
                <containers.TopMedium>
                    <StyledImage src={neon} alt="ps" />
                </containers.TopMedium>
            </containers.TopMedium>
            <containers.TopMedium />
        </containers.ContentContainer>
    );
};
