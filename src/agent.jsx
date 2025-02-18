import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import "./agent.css"
import { FaEdit, FaHome, FaTrash,  } from "react-icons/fa";
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
                    <a className={`nav-link ${activeTab === "form" ? "active" : ""}`}onClick={() => setActiveTab("form")}>Ajouter un agent</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === "table" ? "active" : ""}`}onClick={() => setActiveTab("table")}>Agent</a>
                </li>
            </ul>
            <div className="tab-content mt-3">
                {activeTab === "form" && (
                    <div className="tab-pane fade show active">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">Prénom</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Entrez le prénom"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Nom</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Entrez le nom"/>
                            </div>
                            <button type="submit" className="btn btn-danger">Ajouter</button>
                        </form>
                    </div>
                )}
                {activeTab === "table" && (
                    <div className="tab-pane fade show active">
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
                                        <td><Link className="btn btn-warning" to={"/update_agent/1"}><FaEdit /> </Link></td>
                                        <td><Link className="btn btn-danger"><FaTrash /> </Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
