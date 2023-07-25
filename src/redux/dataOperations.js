import axios from "axios";

 const instance = axios.create({
  baseURL: "https://shop-server-site.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getDataThunk = async (page, pageLimit, query, category) => { 
  const ifQueryNull = !query ? "" : `&query=${query}`;
  const ifCategoryUndef = !category ? "" : `/${category}`;
  
  try {
    const { data } = await instance.get(`/products${ifCategoryUndef}?page=${page}&pageLimit=${pageLimit}${ifQueryNull}`);
    console.log(data)
    return data;
  } catch (error) {
    return error.message;
  }
}

export const getOneProduct = async (id) => { 
  try {
    const { data } = await instance.get(`/products/${id}`);

    return data;
  } catch (error) {
    return error.message;
  }
}

export const getHisrotyOrdersUser = async (uid) => {
  try {
    const { data } = await instance.get(`/history-orders/${uid}`);

    if (!data.orders) return data.orders;

    return data.orders.reverse();
  } catch (error) {
    return error.message;
  }
}

export const addToHistoryOrders = async (uid, order) => {
  try {
    const { data } = await instance.post("/history-orders", {userId: uid, orders: [order]});
    
    return data;
  } catch (error) {
    return error.message;
  }
}

