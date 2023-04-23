import { useState, useEffect, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { collectionGroup } from "firebase/firestore";
import { useSelector } from "react-redux";
import {
  selectorIsLoggedInUser,
  selectorUserData,
} from "../../redux/selectors";
import { fireDB } from "../../firebase/config";
import { Container } from "./ProfilePage.styled";
import ListNavProfile from "../../components/ListNavProfile/ListNavProfile";

const ProfilePage = () => {
  const [historyOrders, setHistoryOrders] = useState([]);

  const isLoggedIn = useSelector(selectorIsLoggedInUser);
  const userData = useSelector(selectorUserData);

  const navigation = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation("/");
    }
  }, [navigation, isLoggedIn]);

  useEffect(() => {
    if (!userData.uid) return;

    (async () => {
      try {
        await onSnapshot(
          collectionGroup(fireDB, `${userData.uid}`), // Get history list collection from firebase
          (snapshot) => {
            const order = snapshot.docChanges().map((change) => ({
              id: change.doc.id,
              ...change.doc.data(),
            }));

            return setHistoryOrders(order);
          }
        );
      } catch (error) {
        console.error("Error getting users:", error);
      }
    })();
  }, [userData.uid]);

  return (
    <Container>
      <ListNavProfile userData={userData} />
      <Suspense>
        <Outlet context={[historyOrders]} />
      </Suspense>
    </Container>
  );
};

export default ProfilePage;
