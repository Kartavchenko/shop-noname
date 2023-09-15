import { useEffect, useState } from "react";
import { getWishlist } from "../../redux/dataOperations";
import { useSelector } from "react-redux";
import { selectorUserData } from "../../redux/selectors";

function WishList() {
  const [wishlistItems, setWishlistItems] = useState([]);

  const { uid } = useSelector(selectorUserData);

  useEffect(() => {
    (async () => {
      const fetchWishlist = await getWishlist(uid);

      if (!uid) return;

      setWishlistItems(fetchWishlist);
    })();
  }, [uid]);

  return (
    <>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems?.map(
          ({ _id, name, description, category, image_url }) => {
            return (
              <li key={_id}>
                <ul>
                  <li>
                    <img src={image_url} alt="" />
                  </li>
                  <li>{name}</li>
                  <li>{description}</li>
                  <li>{category}</li>
                </ul>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}

export default WishList;
