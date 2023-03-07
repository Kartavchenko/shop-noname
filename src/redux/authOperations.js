import { createAsyncThunk } from "@reduxjs/toolkit";
import firebaseConfig from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider()

export const loginWithGoogle= createAsyncThunk(
  "user/loginGoogle",
  async (_, thunkAPI) => {
    try {
      const result = await signInWithPopup(auth, provider);

      const credential = await GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = {
       uid: result.user.uid,
        email: result.user.email,
      };

      return { user: user, token: token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createAccount = createAsyncThunk(
  "user/register",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName || "Buyer",
      };

      const token = await userCredential.user.getIdToken();
      console.log({ user: user, token: token })
      return { user: user, token: token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginInAccount = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      };

      const token = await userCredential.user.getIdToken();
      return { user: user, token: token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutAccount = createAsyncThunk("user/logout",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      return {user: null, token: null, basket: []}
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
