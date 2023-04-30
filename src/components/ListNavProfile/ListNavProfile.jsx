import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BoxNav, NavUser, Container } from "./ListNavProfile.styled";
import { getDataUser } from "../../redux/authOperations";

const ListNavProfile = ({ userData }) => {
  const { name, email } = userData;

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => await dispatch(getDataUser()))();
  }, [dispatch]);

  return (
    <Container>
      <BoxNav>
        <NavUser to="user">
          {name ? name : "User"} {email}
        </NavUser>
      </BoxNav>
      <BoxNav>
        <NavUser to="orders">Orders</NavUser>
      </BoxNav>
      <BoxNav>
        <NavUser to="wishlist">Wish list</NavUser>
      </BoxNav>
    </Container>
  );
};

export default ListNavProfile;
