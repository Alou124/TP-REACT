
import { useState } from 'react'
import './App.css'
import BookProfil from "./components/bookCard.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");

  const ajouterLivre = (e) => {
    e.preventDefault();
    if (titre.trim() === "" || auteur.trim() === "") {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    const nouveauLivre = {
      id: booklist.length + 1,
      Titre: titre,
      auteur: auteur,
      estDisponible: true
    };
    setbooklist([...booklist, nouveauLivre]);

    setTitre("");
    setAuteur("");
  };

  const [booklist, setbooklist] = useState([
    { id: 1, Titre: "Une si longue lettre", auteur: "Mariama Ba", estDisponible: true },
    { id: 2, Titre: "Les Bouts de bois de dieu", auteur: "Ousmane", estDisponible: false },
    { id: 3, Titre: "L'Aventure ambiguë", auteur: "Cheikh Hamidou Kane", estDisponible: true },
    { id: 4, Titre: "Le ventre de l'Atlantique", auteur: "Fatou Diome", estDisponible: false }
  ]);

  const onclickEmprunt = (id) => {
    setbooklist(booklist.map((livre) =>
      livre.id === id
        ? { ...livre, estDisponible: !livre.estDisponible }
        : livre
    ));
  };

  let newlist = booklist.filter((e) => e.estDisponible === true);

  

return (
  <div className="container bg-light min-vh-100 p-4">

    <div className="card p-4 shadow-sm border-0 mb-4">
      <h4 className="mb-3">Ajouter un livre</h4>

      <form onSubmit={ajouterLivre}>
        <div className="row align-items-end">
          <div className="col-md-5 mb-3">
            <label className="form-label">Titre du livre</label>
            <input
              type="text"
              className="form-control"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              placeholder="Entrer le titre"
            />
          </div>

          <div className="col-md-5 mb-3">
            <label className="form-label">Auteur</label>
            <input
              type="text"
              className="form-control"
              value={auteur}
              onChange={(e) => setAuteur(e.target.value)}
              placeholder="Entrer le nom de l'auteur"
            />
          </div>

          <div className="col-md-2 mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>

    {/* Liste en dessous */}
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4>Liste des livres</h4>
      <span className="text-success fw-bold ">
        Livres disponibles : {newlist.length}
      </span>
    </div>
    <div className="row g-3">
      {booklist.map((u) => (
        <div className="col-md-4 col-lg-3" key={u.id}>
          <div className="card p-3 shadow-sm border-0 h-100">

            <BookProfil
              titre={u.Titre}
              auteur={u.auteur}
              estDisponible={u.estDisponible}
            />
            <button
              className={`btn mt-3 ${
                u.estDisponible ? "btn-success" : "btn-danger"
              }`}
              onClick={() => onclickEmprunt(u.id)}
            >
              {u.estDisponible ? "Emprunter" : "Rendre"}
            </button>
          </div>
        </div>
      ))}
    </div>

  </div>
);
}

export default App;
