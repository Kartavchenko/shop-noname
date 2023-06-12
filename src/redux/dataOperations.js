import axios from "axios";

 const instance = axios.create({
  baseURL: "https://shop-server-site.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getDataThunk = async (page, pageLimit, query) => { 
  const ifQueryNull = !query ? "" : `&query=${query}`;
  
  try {
    const {data} = await instance.get(`/products?page=${page}&pageLimit=${pageLimit}${ifQueryNull}`);

    return data;
  } catch (error) {
    return error.message;
  }
}

export const getHisrotyOrdersUser = async (uid) => {
  try {
    const { data } = await instance.get(`history-orders/${uid}`);

    return data.orders;
  } catch (error) {
    return error.message;
  }
}

export const addToHistoryOrders = async (uid, order) => {
  try {
    const { data } = await instance.post(`history-orders`, {userId: uid, orders: [order]});

    return data;
  } catch (error) {
    return error.message;
  }
}

