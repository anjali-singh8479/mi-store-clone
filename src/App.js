import data from "./data/data.json";
import "./App.css";
import Prenavbar from "./components/Prenavbar.js";
import Navbar from "./components/Navbar.js";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import Starproduct from "./components/Starproduct.js";
import Hot from "./components/Hot.js";
import Productreview from "./components/Productreview.js";
import Hotaccesories from "./components/Hotaccesories.js";
import Videos from "./components/Videos.js";
import Banners from "./components/Banners.js";
import Footer from "./components/Footer.js";
import NavOptions from "./components/NavOptions.js";

import { BrowserRouter as Router ,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar logo={data.logo}/>
      <NavOptions
        miphones={data.miPhones}
        redmiphones={data.redmiPhones}
        tv={data.tv}
        laptops={data.laptop}
        lifestyle={data.fitnessAndLifeStyle}
        home={data.home}
        radio={data.audio}
        accesories={data.accessories}
      />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading head="STARPRODUCT" />
      <Starproduct star={data.starProduct} />
      <Heading head="HOTACCESORIES" />
      <Hot/>
      
      {/* <Route exact path="/music">
        <Hotaccesories
          music={data.hotAccessories.music}
          musiccover={data.hotAccessoriesCover.music}
        />
      </Route>  */}
      {/* <Route  exact path='/smartDevice'>
        <Hotaccesories
          smartDevice={data.hotAccessories.smartDevice}
         smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />
      </Route>  */}

      {/* <Hotaccesories
        music={data.hotAccessories.music}
        musiccover={data.hotAccessoriesCover.music}
      /> */}
      <Hotaccesories
          smartDevice={data.hotAccessories.smartDevice}
         smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />
      {/* <Route exact path="/home">
      <Hotaccesories
          home={data.hotAccessories.home}
        homecover={data.hotAccessoriesCover.home}
        />
      </Route> */}
      {/* <Hotaccesories
         lifestyle={data.hotAccessories.lifeStyle}
       lifestyleCover={data.hotAccessoriesCover.lifeStyle}
        /> */}
      {/* <Hotaccesories
         mobileAccesories={data.hotAccessories.mobileAccessories}
         mobileAccesoriesCover={data.hotAccessoriesCover.mobileAccessories}
        /> */}
      <Heading head="PRODUCT REVIEW" />
      <Productreview review={data.productReviews} />
      <Heading head="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading head="BANNERS" />
      <Banners end={data.banner.end} />
      <Footer
        support={data.footer.support}
        shop={data.footer.shopAndLearn}
        retail={data.footer.retailStore}
        about={data.footer.aboutUS}
        contact={data.footer.contactUs}
      />
    </Router>
  );
}

export default App;
