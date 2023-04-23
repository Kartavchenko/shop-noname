import { BoxNav, NavUser, Container } from "./ListNavProfile.styled";

const ListNavProfile = ({ userData }) => {
  const { name, email } = userData;
  return (
    <Container>
      <BoxNav>
        <NavUser to="/profile">
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
