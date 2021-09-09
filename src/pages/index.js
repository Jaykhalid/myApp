import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { homeObjOne , homeObjTwo, homeObjThree, homeObjFive, homeObjSix} from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)


    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} /> 
           <HeroSection /> 
           <InfoSection {...homeObjTwo} /> 
           <InfoSection {...homeObjOne} /> 
           <Services /> 
           <InfoSection {...homeObjFive} /> 
           <InfoSection {...homeObjThree} /> 
           <InfoSection {...homeObjSix} /> 
           <Footer />
        </>
    );
};

export default Home
