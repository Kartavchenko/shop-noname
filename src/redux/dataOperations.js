export const getDataThunk = async (page, search) => {
  try {
    const query = search ? `&title=${search}` : '';
    const fetchData = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=20${query}`);
    
    return await fetchData.json();
  } catch (error) {
    return error.message;
  }
}

export const getTotalPages = async () => {
  try {
    const fetchPages = await fetch(`https://api.escuelajs.co/api/v1/products`);
    const getAllItems = await fetchPages.json();
    
    const totalPages = await Math.ceil(getAllItems.length / 20);
    
    return await totalPages;
  } catch (error) {
   return error.message;
  }
}
