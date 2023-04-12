export const getSearchData = async (search) => {
  try {
    const fetchData = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${search}`);
    return await fetchData.json();
  } catch (error) {
    return error.message;
  }
}

export const getDataThunk = async (page, search) => {
  try {
    const query = search ? `&title=${search}` : '';
    const fetchData = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=20${query}`);
    return await fetchData.json();
  } catch (error) {
    return error.message;
  }
}