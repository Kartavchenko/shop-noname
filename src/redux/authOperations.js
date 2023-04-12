import { createAsyncThunk } from "@reduxjs/toolkit";
import firebaseConfig from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    await GoogleAuthProvider.credentialFromResult(result);

    return result.user;
  } catch (error) {
    return error.message;
  }
}

export const registerAccount = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    return userCredential.user;
  } catch (error) {
    return error.message;
  }
}

export const loginAccount = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    return userCredential.user;
  } catch (error) {
    return error.message;
  }
}

export const getDataUser = async () => {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        return user;
        } else {
            // User is signed out
            console.log("User is signed out")
          }
    });
  } catch (error) {
    return error.message;
  }
}

export const logOutAccount = createAsyncThunk("user/logout",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
