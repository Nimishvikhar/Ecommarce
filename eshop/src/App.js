import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import Featured from './Component/Featured';
import FeatuedProduct from './Component/FeatuedProduct';
import Offer from './Component/Offer';
import Testimonial from './Component/Testimonial';
import Bands from './Component/Bands';
import Footer from './Component/Footer';
// import Cards from './Component/Cards';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { SideBar } from './Component/SideBar';
import Liftside from './Component/Liftside';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Gettingstarted from './Component/Gettingstarted';
import SplitPane from 'react-split-pane';

const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%',
  position: 'absolute'
};

function App() {
 
  return (

    <div>
      <BrowserRouter>
      <SplitPane
      split="vertical"
      minSize={100}
      defaultSize={100}
      resizerStyle={styles}
    >
   {/* <NavBar />
   <Home />
   <Featured />
   <FeatuedProduct />
   <Offer />
   <Testimonial  />
   <Bands />
   <Footer /> */}
   {/* <SideBar /> */}
   {/* <Cards /> */}
   <Liftside />
   <Switch>
     <Route path="/aa" ><Gettingstarted/></Route>
   </Switch>
   </SplitPane>
   </BrowserRouter>
    </div>
  );
}

export default App;
