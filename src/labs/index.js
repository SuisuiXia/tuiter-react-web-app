import Assignment3 from "./a3";
// import { Link } from "react-router-dom";
import Nav from "../nav";
import Assignment4 from "./a4";
import {Routes, Route} from "react-router";


function Labs() {
   return(
      <div>
         {/* <Link to="/labs/a3">A3</Link>  |
         <Link to="/hello">Hello</Link>  |
         <Link to="/tuiter">Tuiter</Link> */}
         <Nav/>
         {/* <Assignment3/> */}
         <Routes>
            <Route path="a3" element={<Assignment3/>}/>
            <Route path="a4" element={<Assignment4/>}/>
         </Routes>
      </div>
   );
}
export default Labs;
