import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../firebase/config";
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

export const loginWithGoogle = createAsyncThunk('data/signWithGoogle', async (_, thunkAPI) => {
  try {
    const result = await signInWithPopup(auth, provider);

    await GoogleAuthProvider.credentialFromResult(result);

    return result.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export const registerAccount = (email, password) => async (dispatch) => {
  dispatch(setStatus("loading"));

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    dispatch(userIsLoggedIn(userCredential.user));
  } catch (error) {
    dispatch(setStatus("error"));
    console.log(error.message);
  }
}

export const loginAccount = (email, password) => async (dispatch) => {
  dispatch(setStatus("loading"));

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    dispatch(userIsLoggedIn(userCredential.user));
    dispatch(setStatus(null));
  } catch (error) {
    dispatch(setStatus(`error: ${error.message}`));
  }
}

// export const registerAccount = createAsyncThunk("data/signUp",
//   async ({email, password}, thunkAPI) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//     return userCredential.user;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// })

// export const loginAccount = createAsyncThunk(
//   'data/signIn',
//   async ({email, password}, thunkAPI) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       return userCredential.user;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const changeNameAccount = createAsyncThunk("data/changeName",
//   async (name, thunkAPI) => {
//     try {
//       await updateProfile(auth.currentUser, {
//         displayName: name,
//       });
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   })

// export const getDataUser = createAsyncThunk("data/getUserData", async (_, thunkAPI) => {
//   try {
//     await onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         console.log(user.displayName)
//         return user;
//         } else {
//             // User is signed out
//             console.log("User is signed out")
//           }
//     });
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// })

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
    dispatch(setStatus(`error: ${error.message}`));
  }
}

export const changeNameAccount = (name) => async (dispatch) => {
  dispatch(setStatus("loading"));
  
  try {
    await updateProfile(auth.currentUser, { displayName: name });

    dispatch(setStatus(null));
  } catch (error) {
    dispatch(setStatus(`error: ${error.message}`));
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
