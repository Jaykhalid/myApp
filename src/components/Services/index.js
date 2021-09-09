import React from 'react';






import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-9.svg';
import Icon3 from '../../images/svg-19.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';


const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1> What Can I Do For You ? </ServicesH1>
                    <ServicesWrapper>  
                        <ServicesCard>
                            <ServicesIcon src={Icon1} />
                                <ServicesH2> Front-End Developer </ServicesH2>
                                <ServicesP>
                                    Decode UI/UX Design with HTML, CSS, Sass, Bootstrap, and Javascript such as using React JS on MERN Stack.
                                </ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon2} />
                                <ServicesH2> Web Developer </ServicesH2>
                                <ServicesP>
                                    3 year experiences with PHP, CodeIgniter Framework, MVC Concept, and MySQL to build a strength Web App.
                                </ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon3} />
                                <ServicesH2> Software Engineer </ServicesH2>
                                <ServicesP>
                                    Excellent knowledge on SDLC, Cloud Technology , API, Software Architecture, and little bit of Cybersecurity  
                                </ServicesP>
                        </ServicesCard>
                    </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
