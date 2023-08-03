import styled, { keyframes } from "styled-components";
import { typography, device } from "../styles";

const LinkContainer = styled.nav`
    background-color: ${(props: any) => props.theme.background};
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    padding: 1.2rem 0 0.8rem 0;
    justify-content: center;

    @media ${device.tablet} {
        background-color: transparent;
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 7rem;
        right: 15%;
        width: 8rem;
        line-height: 1rem;
    }
`;

const ghostAnimation = keyframes`
    40% { opacity: 0.1; }
    41% { opacity: 0.2; }
    42% { opacity: 0.4; }
    43% { opacity: 0.6; }
    44% { opacity: 0.8; }
    45% { opacity: 1; }
    90% { opacity: 1; }
    91% { opacity: 0.8} 
    92% { opacity: 0.6; }
    93% { opacity: 0.4; }
    94% { opacity: 0.2; }
    95% { opacity: 0.1; }
`;

const SneakyLink = styled(typography.LinkHeading)`
    opacity: 0.1;
    animation: ${ghostAnimation} 8s linear infinite;

    &:hover {
        opacity: 1;
        animation: none;
    }
`;

export const SideNav = () => {
    return (
        <LinkContainer>
            <typography.LinkHeading exact to="/">
                HELLO
            </typography.LinkHeading>
            <br />
            <typography.LinkHeading exact to="/kurzgesagt">
                ABOUT
            </typography.LinkHeading>
            <br />
            <typography.LinkHeading exact to="/projects">
                PROJECTS
            </typography.LinkHeading>
            <br />
            <SneakyLink exact to="/escalade">
                CLIMBING
            </SneakyLink>
            <br />
            <SneakyLink exact to="/muusika">
                MUSIC
            </SneakyLink>
            <br />
        </LinkContainer>
    );
};
