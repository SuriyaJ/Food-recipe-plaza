import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
  
// Import the pages

import img from './images/img.jpg';
import img1 from './images/img1.PNG';
import img2 from './images/img2.PNG';
import img3 from './images/img3.PNG';
import img4 from './images/img4.PNG';
import img5 from './images/img5.PNG';
  
// Import css
import "./Happ.css"
import Form from "./components/Form";

  
function Happ() {
  return (
    <div className="App">
      
      <Router>
        <div className="list">
          <div className="logo">FOOD RECIPE PLAZA</div>       
            <div className="home"><Link to="/">Home</Link></div>
            <div><Link to="page1">Log in</Link></div>
        </div>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>,
        <div className="homepage">
          <img src={img} alt="not found" />
          <img src={img1} alt="not found" />
          <img src={img2} alt="not found" />
          <img src={img3} alt="not found" />
          <img src={img4} alt="not found" />
          <img src={img5} alt="not found" />

        </div>
        } />
          <Route exact path="page1" element={<Form/>} />
        </Routes>
      </Router>
    </div>

  );
}
export default Happ;