import "./fournisseur.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const FournisseurComponent = ({ data }) => {
    const [activeTab, setActiveTab] = useState("form");

    return (
        <div className="container mt-4">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button 
                        className={`nav-link ${activeTab === "form" ? "active" : ""}`} 
                        onClick={() => setActiveTab("form")}
                    >
                        Ajouter un fournisseur
                    </button>
                </li>
                <li className="nav-item">
                    <button 
                        className={`nav-link ${activeTab === "table" ? "active" : ""}`} 
                        onClick={() => setActiveTab("table")}
                    >
                        Fournisseurs
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                {activeTab === "form" && (
                    <div className="tab-pane fade show active">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nom du fournisseur</label>
                                <input type="text" className="form-control" id="name" placeholder="Entrez le nom" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contact" className="form-label">Contact</label>
                                <input type="text" className="form-control" id="contact" placeholder="Entrez le contact" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Adresse</label>
                                <input type="text" className="form-control" id="address" placeholder="Entrez l'adresse" />
                            </div>
                            <button type="submit" className="btn btn-danger">Ajouter</button>
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
                                        <th>Nom</th>
                                        <th>Contact</th>
                                        <th>Adresse</th>
                                        <th>Modifier</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row) => (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.contact}</td>
                                            <td>{row.address}</td>
                                            <td>
                                                <Link className="btn btn-warning" to={`/update_fournisseur/${row.id}`}>
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
};

export default FournisseurComponent;
