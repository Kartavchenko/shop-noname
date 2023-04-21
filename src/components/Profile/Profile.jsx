import { useOutletContext } from "react-router";
import { UserNameText, GoCatalogButton } from "./Profile.styled";

const Profile = () => {
  const [userData] = useOutletContext();

  const { name, email } = userData; // User data from firebase

  return (
    <div>
      <h1>Profile</h1>
      <UserNameText>{name ? name : email}</UserNameText>
      <GoCatalogButton to="/">{"<-"}Go to catalog</GoCatalogButton>
    </div>
  );
};

export default Profile;
