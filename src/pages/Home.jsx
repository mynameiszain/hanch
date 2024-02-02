import SocialMediaBar from '../components/SocialMediaBar'
import Footer from '../components/Footer'
import SoapBox from '../components/Soapbox/Soapbox'
import Featured from '../components/Featured'
import UpcomingAppearence  from '../components/UpcomingAppearence'



const Home = () => {
  return (
    <>
      <div className="content-area">
        <SocialMediaBar />
        <SoapBox />
        <Featured />
        <UpcomingAppearence />
        <Footer />
      </div>
    </>
  )
}

export default Home