import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./mission.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Mission() {
    const [activeTab, setActiveTab] = useState("form");
    const data = [
        { id: 1, title: "Mission A", description: "Description A", date: "2025-03-01" },
        { id: 2, title: "Mission B", description: "Description B", date: "2025-03-02" },
        { id: 3, title: "Mission C", description: "Description C", date: "2025-03-03" },
    ];

    return (
        <div className="container mt-4">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={`nav-link ${activeTab === "form" ? "active" : ""}`} onClick={() => setActiveTab("form")}>Choissir une mission</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${activeTab === "table" ? "active" : ""}`} onClick={() => setActiveTab("table")}>Mes Missions</Link>
                </li>
            </ul>
            <div className="tab-content">
                {activeTab === "form" && (
                    <div className="tab-pane fade show active">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Objet de la mission</label>
                                <input type="text" className="form-control" id="title" placeholder="Entrez le objet de la mission" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dateDebut" className="form-label">Date de début</label>
                                <input type="date" className="form-control" id="dateDebut" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="dateFin" className="form-label">Date de fin</label>
                                <input type="date" className="form-control" id="dateFin" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="villeDepart" className="form-label">Ville de départ</label>
                                <input type="text" className="form-control" id="villeDepart" placeholder="Entrez la ville de départ" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="villeFin" className="form-label">Ville d'arrivée</label>
                                <input type="text" className="form-control" id="villeFin" placeholder="Entrez la ville d'arrivée" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="status" className="form-label">Statut</label>
                                <select className="form-select" id="status">
                                    <option value="en_attente">En attente</option>
                                    <option value="en_cours">En cours</option>
                                    <option value="terminee">Terminée</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vehicule" className="form-label">Véhicule</label>
                                <select className="form-select" id="vehicule">
                                    <option value="">Sélectionnez un véhicule</option>
                                    <option value="vehicule1">Véhicule 1</option>
                                    <option value="vehicule2">Véhicule 2</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="chauffeur" className="form-label">Chauffeur</label>
                                <select className="form-select" id="chauffeur">
                                    <option value="">Sélectionnez un chauffeur</option>
                                    <option value="chauffeur1">Chauffeur 1</option>
                                    <option value="chauffeur2">Chauffeur 2</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dotation" className="form-label">Dotation</label>
                                <input type="text" className="form-control" id="dotation" placeholder="Entrez la dotation" />
                            </div>
                            <button type="submit" className="btn btn-danger">Choissir</button>
                        </form>
                    </div>
                )}
                {activeTab === "table" && (
                    <div className="tab-pane fade show active">
                        <div className="table-wrapper">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Titre</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        <th>Modifier</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row) => (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.title}</td>
                                            <td>{row.description}</td>
                                            <td>{row.date}</td>
                                            <td><Link className="btn btn-warning" to={`/update_mission/${row.id}`}><FaEdit /> </Link></td>
                                            <td><Link className="btn btn-danger"><FaTrash /> </Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
}
