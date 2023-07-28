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
    50% { opacity: 0; }
    52% { opacity: 0.2; }
    54% { opacity: 0.4; }
    56% { opacity: 0.6; }
    58% { opacity: 0.8; }
    60% { opacity: 1; }
    90% { opacity: 1; }
    92% { opacity: 0.8} 
    94% { opacity: 0.6; }
    96% { opacity: 0.4; }
    98% { opacity: 0.2; }
    100% { opacity: 0; }

`;

const SneakyLink = styled(typography.LinkHeading)`
    /* color: ${(props: any) => props.theme.background}; */
    opacity: 0;
    animation: ${ghostAnimation} 10s linear infinite;
    animation-delay: 1s;

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
