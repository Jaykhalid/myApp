import React, {useState} from 'react'
import Video from '../../videos/footage.mp4'
import {Button} from '../ButtonElements' 
import { HeroContainer, HeroBg, VideoBg, 
    HeroContent,HeroH1, HeroP, 
    HeroBtnWrapper, ArrowForward, ArrowRight } 
    from './HeroElements';


    const HeroSection = () => { 

        const [hover, setHover] = useState(false)

        const onHover = () => {
            setHover(!hover)
        }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg 
                autoPlay loop muted 
                src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Here's What You Looking For !</HeroH1>
                <HeroP>
                    Welcome to my Portfolio Websites,
                    it's easier to explore about me. 
                    Let's be Attractive and more Creative!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='about' 
                     onMouseEnter={onHover}
                     onMouseLeave={onHover}
                    >
                        Check This Out 
                        { hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
