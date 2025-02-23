import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./véhicule.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Vehicule() {
    const [activeTab, setActiveTab] = useState("form");

    const data = [
        { id: 1, marque: "Toyota", modele: "Corolla", annee: 2020, matricule: "1234-ABC" },
        { id: 2, marque: "Honda", modele: "Civic", annee: 2019, matricule: "5678-DEF" },
        { id: 3, marque: "Ford", modele: "Focus", annee: 2021, matricule: "9101-GHI" },
    ];

    return (
        <div className="container mt-4">
            {/* Onglets pour basculer entre le formulaire et la liste */}
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={`nav-link ${activeTab === "form" ? "active" : ""}`} onClick={() => setActiveTab("form")}>
                        Ajouter un véhicule
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${activeTab === "table" ? "active" : ""}`} onClick={() => setActiveTab("table")}>véhicules</Link>
                </li>
            </ul>

            <div className="tab-content mt-3">
                {activeTab === "form" && (
                    <div className="tab-pane fade show active">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="marque" className="form-label">Marque</label>
                                <input type="text" className="form-control" id="marque" placeholder="Entrez la marque" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="modele" className="form-label">Modèle</label>
                                <input type="text" className="form-control" id="modele" placeholder="Entrez le modèle" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="annee" className="form-label">Année</label>
                                <input type="number" className="form-control" id="annee" placeholder="Entrez l'année" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="matricule" className="form-label">Matricule</label>
                                <input type="text" className="form-control" id="matricule" placeholder="Entrez le matricule" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="matricule" className="form-label">Fournis par </label>
                                <select name="" id="" className='form form-select'>
                                    <option value="">fournisseur 1</option>
                                    <option value="">fournisseur 2</option>
                                    <option value="">fournisseur 3</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-danger">Ajouter</button>
                        </form>
                    </div>
                )}

                {/* Tableau des véhicules */}
                {activeTab === "table" && (
                    <div className="tab-pane fade show active">
                        <div className="table-wrapper">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Marque</th>
                                        <th>Modèle</th>
                                        <th>Année</th>
                                        <th>Matricule</th>
                                        <th>Modifier</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row) => (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.marque}</td>
                                            <td>{row.modele}</td>
                                            <td>{row.annee}</td>
                                            <td>{row.matricule}</td>
                                            <td>
                                                <Link className="btn btn-warning" to={`/update_vehicule/${row.id}`}>
                                                    <FaEdit />
                                                </Link>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger">
                                                    <FaTrash />
                                                </button>
                                            </td>
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
