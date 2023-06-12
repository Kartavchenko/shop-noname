import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOutAccount, changeNameAccount } from "../../redux/authOperations";
import {
  Container,
  GoCatalogButton,
  LogOutBtn,
  LogOutIcon,
  Input,
  Form,
  BtnChangeName,
  BoxTitle,
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
      <BoxTitle>
        <h2>Profile</h2>
        <LogOutBtn type="button" onClick={logOutBtn}>
          LogOut
          <LogOutIcon />
        </LogOutBtn>
      </BoxTitle>
      <Form onSubmit={updateName}>
        <Input
          color="warning"
          id="name"
          label="Name"
          name="name"
          type="text"
          size="small"
          value={userChangedName}
          onChange={handleChangeName}
        />
        <BtnChangeName
          type="submit"
          disabled={!userChangedName}
          variant="contained"
        >
          {changeMarkName ? <CheckIconStyled /> : "Change Name"}
        </BtnChangeName>
      </Form>
      <GoCatalogButton to="/">{"<-"}Go to catalog</GoCatalogButton>
    </Container>
  );
};

export default Profile;
