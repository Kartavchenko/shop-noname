export const selectorUserData = ({ data }) => data.user;

export const selectorIsLoggedInUser = ({ data }) => data.user.uid;

export const selectorLoading = ({ data }) => data.loading;

export const selectorError = ({ data }) => data.error;

export const selectorBasketItems = ({ data }) => data.basket;

