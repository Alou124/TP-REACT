
export default function BookProfil({ id, titre, auteur, estDisponible, onclickEmprunt }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        margin: "5px",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <h5 className="mb-3">{titre}</h5>

      <p className="text-secondary mb-2">Auteur : {auteur}</p>

      <p>
        Statut : {estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}
      </p>

      <button
        className={`btn btn-sm ${
          estDisponible ? "btn-success" : "btn-danger"
        }`}
        onClick={() => onclickEmprunt(id)}
      >
      </button>
    </div>
  );
}
