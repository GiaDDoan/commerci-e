export const fetchSearch = (input) => {
  return fetch(`https://commerci-e.herokuapp.com/search?searchInput=${input}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response.json());
};

export const fetchSearchWithPage = (input, page) => {
  return fetch(
    `https://commerci-e.herokuapp.com/search/page?searchInput=${input}&page=${page}&limit=12`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).then((response) => response.json());
};
