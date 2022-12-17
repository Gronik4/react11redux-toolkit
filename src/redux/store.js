import { configureStore } from "@reduxjs/toolkit/";
import factSlise from './facts';
import photoSlise from './photos';

const store =configureStore({
  reducer: {
    showfacts: factSlise,
    showphotos: photoSlise
  }
})

export default store;
