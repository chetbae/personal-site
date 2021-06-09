// import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { typography, containers } from '../styles';
import { SideNav } from '../components/SideNav';
import { MenuDisplay, PersonalSite, Wavey, Zoomer } from './projects';

import personalsite_image from '../assets/personalsite.png';
import zoomer_image from '../assets/zoomer.png';
import wavey_image from '../assets/wavey.png';
import menudisplay_image from '../assets/menudisplay.gif';

const StyledNav = styled.nav`
    width: 100%;
`;

const StyledImg = styled.img`
    transition: opacity 0.1s ease-in;
    width: 90%; 
    height: 18rem; 
    object-fit: cover; 
    object-position: 0% 40%;
    
    &:hover {
        opacity: 75%;
    }
`;

const StyledA = styled.a`
    text-decoration: none;
`;

const Banners = () => {

    function createBanner( name:string, image:string, link:string ) {
        return(
            <StyledA href={"/projects/" + link}>
                <StyledImg src={image} alt={name} />
                <typography.SmallBody>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}
                </typography.SmallBody>
                <br /><br /><br /><br />
            </StyledA>
        );
    }

    return(
        <StyledNav className="banner" >
            {createBanner("Personal Site", personalsite_image, "personal-site")}
            {createBanner("Zoom Clone", zoomer_image, "zoomer")}
            {createBanner("Waveform Visualizer", wavey_image, "wavey")}
            {createBanner("Restaurant Menu Display", menudisplay_image, "menu-display")}
        </StyledNav>
    );
};

export const ProjectsPage = () => {
    
    return(
            <containers.SiteContainer>
                <SideNav />

                <containers.PageContainer>
                    <containers.ContentContainer>

                        <Switch>
                            <Route exact path='/projects' component={Banners} />
                            <Route path='/projects/zoomer' component={Zoomer} />
                            <Route path='/projects/personal-site' component={PersonalSite} />
                            <Route path='/projects/wavey' component={Wavey} />
                            <Route path='/projects/menu-display' component={MenuDisplay} />
                        </Switch>
                        
                    </containers.ContentContainer>
                </containers.PageContainer>
            </containers.SiteContainer>
    );
};