import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOutAccount, changeNameAccount } from "../../redux/authOperations";
import {
  Container,
  GoCatalogButton,
  LogOutBtn,
  LogOutIcon,
  InputName,
  Form,
  BtnChangeName,
  BoxTitleLogout,
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
      <BoxTitleLogout>
        <h2>Profile</h2>
        <LogOutBtn type="button" onClick={logOutBtn}>
          LogOut
          <LogOutIcon />
        </LogOutBtn>
      </BoxTitleLogout>
      <Form onSubmit={updateName}>
        <InputName
          id="name"
          label="Name"
          name="name"
          type="text"
          required
          value={userChangedName}
          onChange={handleChangeName}
        />
        <BtnChangeName type="submit" variant="contained">
          Change Name
        </BtnChangeName>
      </Form>
      <GoCatalogButton to="/">{"<-"}Go to catalog</GoCatalogButton>
    </Container>
  );
};

export default Profile;
