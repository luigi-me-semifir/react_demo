import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Titre from "./Titre";
import Calcul from "./components/Calcul";
import Users from "./components/users/Users";

import styles from "./App.module.css";
import NavBar from "./components/navBar/NavBar";
import MonId from "./components/MonId";

const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Titre />} />
        <Route path="/users" element={<Users />} />
        <Route path="/calcul" element={<Calcul />} />
        <Route path="/:id" element={<MonId />} />
      </Routes>
    </div>
  );
};

export default App;
