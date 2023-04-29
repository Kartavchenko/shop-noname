import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../firebase/config";
import Notiflix from "../helpers/notifications";
import { userIsLoggedIn, setStatus } from "./userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";

const provider = new GoogleAuthProvider(); 

export const registerAccount = (email, password) => async (dispatch) => {
  dispatch(setStatus(true)); // set loading

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    dispatch(userIsLoggedIn(userCredential.user));
    dispatch(setStatus(false)); // reset loading

  } catch (error) {
    dispatch(setStatus(false)); 
    Notiflix.Notify.failure(`Email already in use`);  // set error message
  }
}

export const loginAccount = (email, password) => async (dispatch) => {
  dispatch(setStatus(true)); // set loading

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    dispatch(userIsLoggedIn(userCredential.user)); 
    dispatch(setStatus(false)); // reset loading

  } catch (error) {
    dispatch(setStatus(false)); 
    Notiflix.Notify.failure(`Email not found`); // set error message
  }
}

export const changeNameAccount = (name) => async (dispatch) => {
  dispatch(setStatus(true)); // set loading
  
  try {
    await updateProfile(auth.currentUser, { displayName: name });

    dispatch(setStatus(null)); // reset loading
    Notiflix.Notify.success(`Name changed on ${name}`); // set success message
  } catch (error) {
    dispatch(setStatus(false));
    Notiflix.Notify.failure(`${error.message}`); // set error message
  }
}

export const getDataUser = () => async (dispatch) => {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        dispatch(userIsLoggedIn(user));
      } else {
        // User is signed out
        console.log("User is signed out")
      }
    });
  } catch (error) {
    dispatch(setStatus(error.message)); // set error message
  }
}

export const loginWithGoogle = createAsyncThunk('data/signWithGoogle', async (_, thunkAPI) => {
  try {
    const result = await signInWithPopup(auth, provider);

    await GoogleAuthProvider.credentialFromResult(result); 

    return result.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); // set error message
  }
})

export const logOutAccount = createAsyncThunk("user/logout",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
