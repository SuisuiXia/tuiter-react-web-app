// import { Link } from "react-router-dom";
import React from "react";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import { Routes, Route } from "react-router";
import HomeScreen from "./home/home-screen";
import ExploreScreen from "./explore/explore-screen";
import BookmarksScreen from "./bookmarks/bookmarks-screen";
import ProfileScreen from "./profile/profile-screen";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import tuitsNewSlice from "./reducers/new-tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, tuit: tuitsNewSlice}});

function Tuiter() {
   return(
      <Provider store={store}>
         <div>
         {/* <Link to="/labs/a3">A3</Link> |
         <Link to="/hello">Hello</Link> |
         <Link to="/tuiter">Tuiter</Link> */}
         <Nav />
         <div className="row">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
               <NavigationSidebar />
            </div>
            <div className="col-10 col-lg-7 col-xl-6"
               style={{"position": "relative"}}>
               <Routes>
               <Route path="/home" element={<HomeScreen/>} />
               <Route path="/explore" element={<ExploreScreen/>} />
               <Route path="/notifications" element={<h1>Notifications</h1>}/>
               <Route path="/messages" element={<h1>Messages</h1>} />
               <Route path="/bookmarks" element={<BookmarksScreen/>} />
               <Route path="/lists" element={<h1>Lists</h1>} />
               <Route path="/profile" element={<ProfileScreen/>} />
               <Route path="/more" element={<h1>More</h1>} />
               </Routes>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
               <WhoToFollowList/>
               {/* <WhoToFollowListItem who={{
                  userName: "Tesla",
                  handle: "tesla",
                  avatarIcon: "../../images/tesla.png" }} />
               <WhoToFollowListItem who={{
                  userName: "SpaceX",
                  handle: "spacex",
                  avatarIcon: "../../images/space.jpg", }} /> */}
            </div>
         </div>
      </div>
      </Provider> 
   );
}
export default Tuiter