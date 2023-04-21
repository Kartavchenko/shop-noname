import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { collectionGroup } from "firebase/firestore";
import { fireDB } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { logOutAccount } from "../../redux/authOperations";
import {
  selectorIsLoggedInUser,
  selectorUserData,
} from "../../redux/selectors";
import {
  Container,
  LogOutBtn,
  LogOutIcon,
  BoxNavUser,
  BoxNavOrders,
  NavUser,
  NavOrders,
} from "./ProfilePage.styled";

const ProfilePage = () => {
  const [historyOrders, setHistoryOrders] = useState([]);

  const isLoggedIn = useSelector(selectorIsLoggedInUser);
  const userData = useSelector(selectorUserData);

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const ordersCollectionList = (user) =>
    collectionGroup(fireDB, user.toString()); // Get history list collection from firebase

  useEffect(() => {
    if (!isLoggedIn) {
      navigation("/");
    }
  }, [navigation, isLoggedIn]);

  useEffect(() => {
    if (!userData.uid) return;

    onSnapshot(ordersCollectionList(userData.uid), (snapshot) => {
      const order = snapshot.docChanges().map((change) => ({
        id: change.doc.id,
        ...change.doc.data(),
      }));

      return setHistoryOrders(order);
    });
  }, [userData.uid]);

  const logOutBtn = () => {
    dispatch(logOutAccount());
  };

  return (
    <Container>
      <BoxNavUser>
        <NavUser to="user">{userData.name}</NavUser>
      </BoxNavUser>
      <BoxNavOrders>
        <NavOrders to="orders">Orders</NavOrders>
      </BoxNavOrders>
      <Outlet context={[historyOrders, userData]} />
      <LogOutBtn type="button" onClick={logOutBtn}>
        LogOut
        <LogOutIcon />
      </LogOutBtn>
    </Container>
  );
};

export default ProfilePage;
