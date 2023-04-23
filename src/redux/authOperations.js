import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../firebase/config";
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

// export const getDataUser = async () => {
//   try {
//     await onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         return user.displayName;
//         } else {
//             // User is signed out
//             console.log("User is signed out")
//           }
//     });
//   } catch (error) {
//     return error.message;
//   }
// }

export const getDataUser = createAsyncThunk("user/getDataUser",
  async (_, thunkAPI) => {
    try {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          console.log(user.displayName);
          return user.displayName;
        } else {
          // User is signed out
          console.log("User is signed out")
        }
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })

export const changeNameAccount = createAsyncThunk("user/changeName",
  async (name, thunkAPI) => {
    try {
      return await updateProfile(auth.currentUser, {
        displayName: name,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
