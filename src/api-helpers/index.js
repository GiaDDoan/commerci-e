export const fetchSamples = (size) => {
  return fetch(`https://commerci-e.herokuapp.com/items/samples?size=${size}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response.json());
};

export const fetchAllCategories = () => {
  return fetch("https://commerci-e.herokuapp.com/items/categories/all", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response.json());
};

export const fetchItemsByCategory = (categoryName, pageNumber) => {
  return fetch(
    `https://commerci-e.herokuapp.com/items/categories?category=${categoryName}&page=${pageNumber}&limit=12`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).then((res) => res.json());
};

//TO DELETE
export const fetchItemsByPrice = (categoryName, pageNumber, min, max) => {
  return fetch(
    `https://commerci-e.herokuapp.com/items/filters/price?category=${categoryName}&min=${min}&max=${max}&page=${pageNumber}&limit=12`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).then((res) => res.json());
};

export const fetchCompanyById = (companyId) => {
  return fetch(`https://commerci-e.herokuapp.com/items/company/${companyId}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const fetchProductById = (productId) => {
  return fetch(`https://commerci-e.herokuapp.com/items/product/${productId}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const fetchProductsByFilter = (filter, page) => {
  return fetch(
    `https://commerci-e.herokuapp.com/items/filter?min=${filter.min}&max=${filter.max}&page=${page}&limit=12`,
    {
      method: "POST",
      body: JSON.stringify({ ...filter }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};

export const updateCart = (cart) => {
  return fetch(`https://commerci-e.herokuapp.com/cart/items`, {
    method: "POST",
    body: JSON.stringify({ ...cart }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
