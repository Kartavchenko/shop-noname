import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOutAccount, changeNameAccount } from "../../redux/authOperations";
import {
  Container,
  GoCatalogButton,
  LogOutBtn,
  LogOutIcon,
} from "./Profile.styled";

const Profile = () => {
  const [userChangedName, setuserChangedName] = useState("");

  const dispatch = useDispatch();

  const logOutBtn = async () => {
    await dispatch(logOutAccount());
  };

  const handleChangeName = (e) => {
    setuserChangedName(e.target.value);
  };

  const updateName = async (e) => {
    e.preventDefault();
    try {
      await dispatch(changeNameAccount(userChangedName));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h2>Profile</h2>
      <GoCatalogButton to="/">{"<-"}Go to catalog</GoCatalogButton>
      <form onSubmit={updateName}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={userChangedName}
          onChange={handleChangeName}
        />
        <button type="submit">Change Name</button>
      </form>
      <LogOutBtn type="button" onClick={logOutBtn}>
        LogOut
        <LogOutIcon />
      </LogOutBtn>
    </Container>
  );
};

export default Profile;
