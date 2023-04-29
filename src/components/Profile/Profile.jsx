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
  CheckIconStyled,
} from "./Profile.styled";

const Profile = () => {
  const [userChangedName, setuserChangedName] = useState("");
  const [changeMarkName, setChangeMarkName] = useState(false);

  const dispatch = useDispatch();

  const logOutBtn = () => {
    dispatch(logOutAccount());
  };

  const handleChangeName = (e) => {
    setuserChangedName(e.target.value);
  };

  const updateName = (e) => {
    e.preventDefault();
    dispatch(changeNameAccount(userChangedName));
    setuserChangedName("");
    setChangeMarkName(true);
    checkIconTimeout();
  };

  const checkIconTimeout = () => {
    setTimeout(() => {
      setChangeMarkName(false);
    }, 3000);
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
          {changeMarkName ? <CheckIconStyled /> : "Change Name"}
        </BtnChangeName>
      </Form>
      <GoCatalogButton to="/">{"<-"}Go to catalog</GoCatalogButton>
    </Container>
  );
};

export default Profile;
