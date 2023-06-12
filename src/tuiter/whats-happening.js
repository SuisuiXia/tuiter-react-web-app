import React, {useState} from "react";
import * as Icon from 'react-bootstrap-icons';
// import {createTuit} from "./reducers/new-tuits-reducer";
import {createTuitThunk} from "./services/tuits-thunks";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 // retrieve dispatch function with hook
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
   const newTuit = {
     tuit: whatsHappening
   }
   dispatch(createTuitThunk(newTuit));
   setWhatsHappening("");
 }
 return (
   <div className="row">
     <div className="col-auto">
       <img src="/images/nasa.png" width={60}/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
           <Icon.Image me-5/>
            <Icon.Paperclip me-5/>
            <Icon.GraphUp me-5/>
            <Icon.Person me-5/>
            <Icon.Map me-5/>
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;