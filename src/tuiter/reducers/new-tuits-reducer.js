import {createSlice} from "@reduxjs/toolkit";
import tuit from "../tuits/tuits.json";


const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "../../images/space.jpg",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}


const tuitsNewSlice = createSlice({
 name: 'tuit',
 initialState: { tuit: tuit },

 reducers: {
    deleteTuit(state, action) {
     const index = state.tuit
        .findIndex(tuit =>
           tuit._id === action.payload);
     state.tuit.splice(index, 1);
   },

   createTuit(state, action) {
     state.tuit.unshift({
       ...action.payload,
       ...templateTuit,
       _id: (new Date()).getTime(),
     })
   },

   likeTuit(state, action) {
            const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[tuitIndex].liked = true;
            state[tuitIndex].likes += 1;
        },
    unlikeTuit(state, action) {
            const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[tuitIndex].liked = false;
            state[tuitIndex].likes -= 1;
        },
 }



});
export const {createTuit, deleteTuit} = tuitsNewSlice.actions;
export default tuitsNewSlice.reducer;

