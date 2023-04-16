import { NavLink } from "react-router-dom";
import { UserNameText } from "./Profile.styled";

const Profile = ({ userName }) => {
  const { name, email } = userName;
  return (
    <div>
      <h1>Profile</h1>
      <UserNameText>{name ? name : email}</UserNameText>
      <NavLink to="/">{"<-"}Go to catalog</NavLink>
    </div>
  );
};

export default Profile;
