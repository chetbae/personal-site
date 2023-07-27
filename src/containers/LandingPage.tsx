import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { typography, containers, device } from "../styles";
import { SideNav } from "../components/SideNav";
import resume from "../assets/resume.pdf";

const LandingContainer = styled.div`
    transition: all 0.5s ease;
`;

const BodyContainer = styled.div`
    margin-left: 0.2rem;

    @media ${device.tablet} {
        margin-left: 1.4rem;
    }
`;

const ListContainer = styled.ul`
    @media ${device.tablet} {
        margin-left: 2.5rem;
    }
`;

const ListItem = styled.li`
    line-height: 1.5rem;

    &::marker {
        content: "●     ";
        color: ${(props: any) => props.theme.primary};
        font-size: 0.8rem;
    }
`;

const ImMax = styled(typography.LargeHeading1)`
    @media ${device.mobileL} {
        padding-left: 5rem;
    }
`;

export const LandingPage = () => {
    const themeContext: any = useContext(ThemeContext);
    const isDark = themeContext.id === "dark";

    return (
        <containers.PageContainer>
            <SideNav />
            <containers.ContentContainer>
                <LandingContainer>
                    <typography.LargeHeading>
                        {isDark ? "Howdy!" : "Hello,"}
                        <br />
                    </typography.LargeHeading>
                    <ImMax>I'm Max{isDark ? " 🤠" : ""}.</ImMax>

                    <BodyContainer>
                        <containers.TopMedium>
                            <typography.Heading>
                                currently ...
                            </typography.Heading>

                            <ListContainer>
                                <ListItem>
                                    <typography.Body>
                                        Actively seeking entry-level&nbsp;
                                        <typography.LinkBody
                                            href={resume}
                                            target="_blank"
                                        >
                                            software developer
                                        </typography.LinkBody>
                                        &nbsp;roles 👨🏻‍💻
                                    </typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>
                                        Working on software and music technology
                                        at&nbsp;
                                        <typography.LinkBody
                                            href="https://ddmal.music.mcgill.ca/"
                                            target="_blank"
                                        >
                                            DDMAL Lab
                                        </typography.LinkBody>
                                        &nbsp;
                                    </typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>
                                        Developing full-stack applications for
                                        VISIBLI
                                    </typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>
                                        {isDark ? "Definitely" : "Probably"}
                                        &nbsp;climbing&nbsp;
                                        <typography.LinkBody
                                            href="https://www.instagram.com/max.sends/"
                                            target="_blank"
                                        >
                                            rocks
                                        </typography.LinkBody>
                                        !🗿
                                    </typography.Body>
                                </ListItem>
                            </ListContainer>
                        </containers.TopMedium>

                        <containers.TopSmall>
                            <typography.Heading>
                                previously...
                            </typography.Heading>

                            <ListContainer>
                                <ListItem>
                                    <typography.Body>
                                        McGill University '23: BA Computer
                                        Science & BMus Jazz Performance
                                    </typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>
                                        Software developer intern at Government
                                        of Canada (Ottawa, ON)
                                    </typography.Body>
                                </ListItem>
                            </ListContainer>
                        </containers.TopSmall>
                        <br />
                        <br />
                    </BodyContainer>
                </LandingContainer>
            </containers.ContentContainer>
        </containers.PageContainer>
    );
};
