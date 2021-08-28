import React from 'react';






import Icon1 from '../../images/svg-7.svg';
import Icon2 from '../../images/svg-8.svg';
import Icon3 from '../../images/svg-10.svg';
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
                <ServicesH1> My Skills </ServicesH1>
                    <ServicesWrapper>  
                        <ServicesCard>
                            <ServicesIcon src={Icon1} />
                                <ServicesH2> Hardskill</ServicesH2>
                                <ServicesP>
                                    Such as Technical, Strengthness, Artistics, and more.
                                </ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon2} />
                                <ServicesH2> Softkill</ServicesH2>
                                <ServicesP>
                                    Such as Linguistics, Problem Solves, Critical Thinking, etc.
                                </ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon3} />
                                <ServicesH2> Hobby</ServicesH2>
                                <ServicesP>
                                    Programming, Photography, Sports, Travelling.
                                </ServicesP>
                        </ServicesCard>
                    </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
