import Seo from "../components/Seo"
import Navbar from "../components/Navbar"
import Banner from"../components/Banner"
import Footer from "../components/Footer"
import Marquee from "../components/Marquee"
import Partners from "../components/Partners"
import Pricing from "../components/Pricing"
import Compliance from "../components/Compliance"


function Home() {
  return (
    <>
      <Seo title="Home - Vita Website" description="Best compliance and pricing plans" />
       <h1>Welcome to Home Page</h1>
       <Navbar/>
       <Banner/>
       <Footer/>
       <Marquee/>
       <Partners/>
       <Pricing/>
       <Compliance/>
    </>
  );
}

export default Home;
