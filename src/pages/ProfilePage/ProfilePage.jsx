import { useState, useEffect, Suspense } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorIsLoggedInUser,
  selectorUserData,
} from "../../redux/selectors";
import { Container } from "./ProfilePage.styled";
import ListNavProfile from "../../components/ListNavProfile/ListNavProfile";
import { getDataUser } from "../../redux/authOperations";
import { getHisrotyOrdersUser } from "../../redux/dataOperations";

function ProfilePage() {
  const [historyOrders, setHistoryOrders] = useState([]);

  const [searchParams] = useSearchParams();

  const navigation = useNavigate();

  const isLoggedIn = useSelector(selectorIsLoggedInUser);

  const { name, email, uid } = useSelector(selectorUserData);

  const dispatch = useDispatch();

  const querySearch = searchParams.get("query") ?? "";

  useEffect(() => {
    (async () => await dispatch(getDataUser()))();
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigation("/");
    } else if (querySearch) {
      navigation(`/?query=${querySearch}`);
    }
  }, [isLoggedIn, navigation, querySearch]);

  useEffect(() => {
    if (!uid) return;

    (async () => {
      try {
        const result = await getHisrotyOrdersUser(uid);

        if (!result) return;

        setHistoryOrders(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [uid]);

  return (
    <Container>
      <ListNavProfile userData={{ name, email }} />
      <Suspense>
        <Outlet context={[historyOrders]} />
      </Suspense>
    </Container>
  );
}

export default ProfilePage;
