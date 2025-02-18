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
                    <a className={`nav-link ${activeTab === "form" ? "active" : ""}`} onClick={() => setActiveTab("form")}>Ajouter une mission</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === "table" ? "active" : ""}`} onClick={() => setActiveTab("table")}>Missions</a>
                </li>
            </ul>
            <div className="tab-content">
                {activeTab === "form" && (
                    <div className="tab-pane fade show active">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Titre de la mission</label>
                                <input type="text" className="form-control" id="title" placeholder="Entrez le titre de la mission" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" id="description" placeholder="Entrez la description" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date de la mission</label>
                                <input type="date" className="form-control" id="date" />
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
