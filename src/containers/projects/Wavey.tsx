import styled from 'styled-components';
import { typography, containers, device } from '../../styles';
import wavey from '../../assets/wavey.png';
import wavey1 from '../../assets/wavey1.png';
import wavey2 from '../../assets/wavey2.png';


const link = "https://chetbae.github.io/wavey";

const Column3 = styled.div`
    @media ${device.tablet} {
        width: 28%;
        padding-right: 6%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
`;

export const Wavey = () => {
    return(
        <containers.ContentContainer>
            <typography.LinkBody href={link} target="_blank">
                Waveform Visualizer
            </typography.LinkBody>
            <containers.TopSmall/>
            <containers.Row>
                <Column3>
                    <typography.Body>
                        Why
                    </typography.Body>
                    <typography.SmallBody>
                        Pet project to get into Audio Digital Signal Processing. While the result barely delves into Audio DSP, it was a fun frontend exploration.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>
                        What
                    </typography.Body>
                    <typography.SmallBody>
                        A single page application that takes as input an audio file, and generates a waveform representation of the entire song.
                    </typography.SmallBody>
                </Column3>
                <Column3>
                    <typography.Body>
                        How
                    </typography.Body>
                    <typography.SmallBody>
                        The audio is parsed into <i>n</i> sections, averaged, and put into an array. The information is then used to draw the waveform on a canvas element. Sweet and simple.
                    </typography.SmallBody>
                </Column3>
            </containers.Row>

            <containers.TopMedium/>
            <StyledImage src={wavey} alt="ps" />
            <containers.TopMedium/>
            <StyledImage src={wavey2} alt="ps" />
            <containers.TopMedium/>
            <StyledImage src={wavey1} alt="ps" />
            <containers.TopMedium/>

        </containers.ContentContainer>
    );
};