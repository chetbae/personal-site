import styled from "styled-components";
import { typography, containers, device } from "../../styles";
import figma_visualtoolkit from "../../assets/figma-visualtoolkit.png";

const link = "https://www.github.com/chetbae/";

const Column3 = styled.div`
    @media ${device.tablet} {
        width: 28%;
        padding-right: 6%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
`;

export const VisualToolkit = () => {
    return (
        <containers.ContentContainer>
            <typography.LinkBody href={link} target="_blank">
                Visual Science Communication Toolkit
            </typography.LinkBody>
            <containers.TopSmall />
            <containers.Row>
                <Column3>
                    <typography.Body>Why</typography.Body>
                    <typography.SmallBody>
                        A tool for teaching design principles to science
                        students.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>What</typography.Body>
                    <typography.SmallBody>
                        A full-stack web application with user-facing interface
                        for making and sharing design tasks, server for
                        interfacing between students and instructors, and
                        database for storing activites. Created with React,
                        Typescript, Konva, NodeJS, Express, and MongoDB.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>How</typography.Body>
                    <typography.SmallBody>
                        Starting from developer handoff with the UI/UX designer,
                        I had a wireframe in Figma to actualize into a web
                        application. I started with the front-end, implementing
                        first styles, containers, and reusable components,
                        worked on making an interactive canvas with konva.
                        TlDraw was used for the drawing library at first until I
                        realized it was too unstable as it was in development. I
                        then moved onto the back-end, creating the server and
                        database. I then made the routing for rooms/activities
                        and the sharing function between instructors and
                        students.
                    </typography.SmallBody>
                </Column3>
            </containers.Row>
            <containers.TopMedium />
            <StyledImage src={figma_visualtoolkit} alt="ps" />
            <br />
            <containers.TopMedium />
            <typography.Body>Still in development.</typography.Body>
            <containers.TopMedium />
        </containers.ContentContainer>
    );
};
