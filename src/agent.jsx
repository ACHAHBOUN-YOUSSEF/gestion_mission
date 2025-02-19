import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import "./agent.css"
import { FaEdit, FaTrash,  } from "react-icons/fa";
import { Link } from 'react-router';
export default function Agent() {
    const [activeTab, setActiveTab] = useState("form");
    const data = [
        { id: 1, firstName: "John", lastName: "Doe", age: 30 },
        { id: 2, firstName: "Jane", lastName: "Smith", age: 25 },
        { id: 3, firstName: "Alice", lastName: "Johnson", age: 28 },
    ];

    return (
        <div className="container mt-4">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={`nav-link ${activeTab === "form" ? "active" : ""}`} onClick={() => setActiveTab("form")}>Ajouter un agent</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${activeTab === "table" ? "active" : ""}`} onClick={() => setActiveTab("table")}>Agents</Link>
                </li>
            </ul>
            <div className="tab-content">
                {activeTab === "form" && (
                    <div className="tab-pane fade show active">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">Prénom</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Entrez le prénom" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Nom</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Entrez le nom" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Âge</label>
                                <input type="number" className="form-control" id="age" placeholder="Entrez l'âge" />
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
                                        <th>Prénom</th>
                                        <th>Nom</th>
                                        <th>Âge</th>
                                        <th>Modifier</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row) => (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.firstName}</td>
                                            <td>{row.lastName}</td>
                                            <td>{row.age}</td>
                                            <td><Link className="btn btn-warning" to={`/update_agent/${row.id}`}><FaEdit /> </Link></td>
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
