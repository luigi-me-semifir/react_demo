const API_URL = "http://localhost:8081/users";

export const addUser = async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(`L'ajout d'user a échoué`);
  }
  return response.json();
};
