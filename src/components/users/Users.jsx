import { useState, useEffect } from "react";
import Card from "../card/Card";
import { addUser } from "../../services/usersService";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [nom, setNom] = useState("");
  const [actif, setActif] = useState(false);
  const [id, setId] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = { nom, actif, id };

    try {
      await addUser(newUser);
      alert("User ajouté avec succés");
      setNom("");
      setId(0);
      setActif(false);
    } catch (error) {
      console.error("Erreur dans l'ajout d'utilisateur", error);
      alert("Echec");
    }
  };

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="checkbox"
          value={actif}
          onChange={(e) => setActif(e.target.checked)}
        />
        <button type="submit"> Click</button>
      </form>
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
