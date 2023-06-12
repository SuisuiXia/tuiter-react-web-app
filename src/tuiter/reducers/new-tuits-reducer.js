import {createSlice} from "@reduxjs/toolkit";
import tuit from "../tuits/tuits.json";
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../services/tuits-thunks";
const initialState = {
   tuit: [],
   loading: false
}



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
 initialState,
 extraReducers: {
  [updateTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const tuitNdx = state.tuit.findIndex((t) => t._id === payload._id)
    state.tuit[tuitNdx] = { ...state.tuit[tuitNdx], ...payload }
  },

  [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuit.push(payload)
    },

  [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuit = state.tuit.filter(t => t._id !== payload)
    },
   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuit = [] },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuit = payload },
   [findTuitsThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   }
 },


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

