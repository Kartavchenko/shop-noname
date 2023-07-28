export const selectorUserData = ({ user }) => user.user;

export const selectorIsLoggedInUser = ({ user }) => user.user.uid;

export const selectorLoading = ({ user }) => user.loading;

export const selectorError = ({ user }) => user.error;

export const selectorBasketItems = ({ user }) => user.basket;

