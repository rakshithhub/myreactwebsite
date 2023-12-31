import { useEffect } from 'react';
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './Context'

const Home = () => {
  const {updateHomePage} = useGlobalContext();
  
  useEffect(()=>{
    updateHomePage();
  },[])
  
  return (
    <HeroSection />
  )
}

export default Home