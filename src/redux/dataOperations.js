export const getSearchData = async (search) => {
  try {
    const fetchData = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${search}`);
    return await fetchData.json();
  } catch (error) {
    return error.message;
  }
}

export const getDataThunk = async (page) => {
  try {
    const fetchData = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=20`);
    return await fetchData.json();
  } catch (error) {
    return error.message;
  }
}