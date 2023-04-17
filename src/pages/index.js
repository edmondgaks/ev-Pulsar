import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services'
import Footer from '../components/Footer'
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'
import Solution from '../components/Solution';

function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <Services />
            <Solution />
            <InfoSection {...homeObjOne} />
            {/* <InfoSection {...homeObjTwo} /> */}
            {/* <InfoSection {...homeObjThree} /> */}
            <Footer />
        </>
    )
}

export default Home