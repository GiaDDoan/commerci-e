export const fetchCartItems = (userId) => {
  return fetch(`https://commerci-e.herokuapp.com/cart/items?userId=${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const addItemToDB = (userId, itemId, qty, stock) => {
  return fetch(
    `https://commerci-e.herokuapp.com/cart/items?userId=${userId}&itemId=${itemId}&qty=${qty}&stock=${stock}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};
