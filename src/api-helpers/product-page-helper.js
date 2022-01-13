export const fetchProductPageSample = (size, sampleKey, sample) => {
  return fetch(
    `https://commerci-e.herokuapp.com/items/samples?size=${size}&${sampleKey}=${sample}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).then((res) => res.json());
};
