export const API_URL = "http://swapi.dev/api";

export const fetchPeople = async () => {
  const res = await fetch(`${API_URL}/people`);
  return res.json();
};

export const fetchPlanets = async (page) => {
  const res = await fetch(`${API_URL}/planets/?page=${page}`);
  return res.json();
};
