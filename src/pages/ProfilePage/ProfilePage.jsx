import { useState, useEffect, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { collectionGroup } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorIsLoggedInUser,
  selectorUserData,
} from "../../redux/selectors";
import { fireDB } from "../../firebase/config";
import { Container } from "./ProfilePage.styled";
import ListNavProfile from "../../components/ListNavProfile/ListNavProfile";
import { getDataUser } from "../../redux/authOperations";

const ProfilePage = () => {
  const [historyOrders, setHistoryOrders] = useState([]);

  const isLoggedIn = useSelector(selectorIsLoggedInUser);
  const { name, email, uid } = useSelector(selectorUserData);

  const navigation = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => await dispatch(getDataUser()))();
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigation("/");
    }
  }, [navigation, isLoggedIn]);

  useEffect(() => {
    if (!uid) return;

    (async () => {
      try {
        await onSnapshot(
          collectionGroup(fireDB, `${email}`), // Get history list collection from firebase
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
  }, [uid, email]);

  return (
    <Container>
      <ListNavProfile userData={{ name, email }} />
      <Suspense>
        <Outlet context={[historyOrders]} />
      </Suspense>
    </Container>
  );
};

export default ProfilePage;
